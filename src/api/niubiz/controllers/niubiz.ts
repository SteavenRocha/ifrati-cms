import { generateAuthorization, generateSecurityToken, generateSessionKey, getDataDni } from '../../../utils/niubiz';

export default {
  async getSessionInfo(ctx) {
    try {
      const { amount, channel } = ctx.query;

      if (!amount || !channel) {
        return ctx.badRequest('Parámetros "amount" y "channel" son requeridos.');
      }

      const token = await generateSecurityToken();
      const sessionKey = await generateSessionKey(Number(amount), token, String(channel));
      /*   const purchaseNumber = generatePurchaseNumber(); */

      const config = strapi.config.get('niubiz') as {
        merchantId: string;
      };

      const responseData = {
        sessionKey,
        /* experationTime, */ // NO LO ESTOY USANDO -> NO DEVUELVE ESTE VALOR MI CONFIGURACION
        merchantId: config.merchantId,
        /*  purchaseNumber, */
        amount,
        channel,
      };

      ctx.send(responseData);
    } catch (error) {
      strapi.log.error('Error en getSessionInfo:', error);
      ctx.throw(500, 'Error generando información de sesión');
    }
  },

  async getAuthorization(ctx) {
    try {
      const { amount, channel, tokenId } = ctx.query;

      if (!amount || !channel || !tokenId) {
        return ctx.badRequest('Parámetros "amount", "channel" y "tokenId" son requeridos.');
      }

      const token = await generateSecurityToken();
      const authorization = await generateAuthorization(token, Number(amount), String(tokenId), String(channel));
      /*   const purchaseNumber = generatePurchaseNumber(); */

      /*  const config = strapi.config.get('niubiz') as {
         merchantId: string;
       }; */

      const responseData = {
        authorization,
        /* merchantId: config.merchantId,
        amount,
        channel, */
      };

      ctx.send(responseData);
    } catch (error) {
      strapi.log.error('Error en getAuthorization:', error);
      ctx.throw(500, 'Error generando información de autorización');
    }
  },

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
  }
};
