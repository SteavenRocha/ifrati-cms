import { generateAuthorization, generateSecurityToken, generateSessionKey, getDataDni, generatePurchaseNumber } from '../../../utils/niubiz';

export default {
  async getDataDni(ctx) {
    try {
      const { dni } = ctx.request.query;

      if (!dni || dni.length !== 8) {
        return ctx.badRequest('DNI inválido');
      }

      const data = await getDataDni(dni);
      return ctx.send(data);
    } catch (error) {
      console.error('Error en getDataDni:', error);
      return ctx.internalServerError('Error al obtener los datos del DNI');
    }
  },

  async getSessionInfo(ctx) {
    try {
      const { amount, mdd, cardDataMap } = ctx.request.body;

      // VALIDAMOS EXISTENCIA DEL BODY
      if (!amount || !mdd || !cardDataMap) {
        return ctx.badRequest('Valores "amount", "mdd" y "cardDataMap" son requeridos.');
      }

      // AMOUNT PARSEADO A DOS DECIMALES
      const decimalAmount = parseFloat(parseFloat(amount).toFixed(2));

      // OBTENER EL CHANNEL Y MERCHANTID
      const config = strapi.config.get('niubiz') as {
        merchantId: string;
        channel: string;
      };

      // OBTENER IP DEL CLIENTE
      const forwarded = ctx.request.headers['x-forwarded-for'];
      const clientIp = typeof forwarded === 'string'
        ? forwarded.split(',')[0].trim()
        : ctx.request.ip;

      // EJECUCION DE LAS FUNCIONES
      const token = await generateSecurityToken();
      const sessionKeyData = await generateSessionKey(token, String(amount), String(clientIp), mdd, cardDataMap);

      // DEESTRUCTURAMOS PARA ENVIAR DATOS PLANOS
      const { sessionKey, expirationTime } = sessionKeyData;

      // OBTENEMOS EL PURCHASENUMBER
      const purchaseNumber = generatePurchaseNumber();

      const responseData = {
        sessionKey,
        expirationTime,
        merchantId: config.merchantId,
        channel: config.channel,
        decimalAmount,
        purchaseNumber
      };

      ctx.send(responseData);
    } catch (error) {
      strapi.log.error('Error en getSessionInfo:', error);
      ctx.throw(500, 'Error generando información de sesión');
    }
  },

  async getAuthorization(ctx) {
    try {
      const { amount, tokenId, purchaseNumber, locationDataMap } = ctx.request.body;

      if (!amount || !tokenId || !purchaseNumber || !locationDataMap) {
        return ctx.badRequest('Parámetros "amount", "tokenId", "purchaseNumber" y "locationDataMap" son requeridos.');
      }

      const token = await generateSecurityToken();
      const authorization = await generateAuthorization(token, String(amount), String(purchaseNumber), String(tokenId), locationDataMap
      );

      ctx.send({ authorization });

    } catch (error) {
      strapi.log.error('Error en getAuthorization:', error);

      const errorData = typeof error.message === 'string' && error.message.startsWith('{')
        ? JSON.parse(error.message)
        : { message: error.message || 'Error desconocido' };

      ctx.status = 500;
      ctx.body = {
        message: 'Error generando información de autorización',
        error: errorData,
      };
    }
  }
};
