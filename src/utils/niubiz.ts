import axios from 'axios';

interface NiubizConfig {    // NIUBIZ CONFIG
    isDev: boolean;
    urlApiDniReniec: string;
    tokenApiDniReniec: string;
    merchantId: string;
    user: string;
    pwd: string;
    urlSecurity: string;
    urlSession: string;
    urlAuthorization: string;
    channel: string;
    currency: string;
}

interface MDD {     // VARIABLES MDD
    email: string;
    dni: string;
    type: string;
    days: Number;
}

interface cardDataMap {  // DATAMAP
    city: string;
    country: string;
    address: string;
    postalCode: string;
    state: string;
    phoneNumber: string;
}

interface locationDataMap {   // DATAMAP
    urlAddress: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

const config = strapi.config.get('niubiz') as NiubizConfig;

export const getDataDni = async (dni: string) => {
    try {
        const response = await axios.get(`${config.urlApiDniReniec}?numero=${dni}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.tokenApiDniReniec}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error al consultar DNI:', error.response?.data || error.message);
        throw new Error('No se pudo obtener los datos del DNI');
    }
};

export function generatePurchaseNumber(): string {
    const timestamp = Date.now().toString(); // 13 dígitos
    const random = Math.floor(100 + Math.random() * 900).toString(); // 3 dígitos aleatorios

    // 9 últimos del timestamp + 3 random = 12 dígitos
    return timestamp.slice(-9) + random;
}

export const generateSecurityToken = async () => {
    const authString = Buffer.from(`${config.user}:${config.pwd}`).toString('base64');

    try {
        const response = await axios.get(config.urlSecurity, {
            headers: {
                Accept: '*/*',
                Authorization: `Basic ${authString}`,
            },
        });

        return response.data;
    } catch (error) {
        strapi.log.error('Error al generar token de seguridad:', error);
        throw error;
    }
};

export const generateSessionKey = async (
    token: string,
    amount: string, // recibo un string "10.00" -> ¿ Puede ser Number?
    clientIp: string,
    mdd: MDD,
    dataMap: cardDataMap
): Promise<{ sessionKey: string; expirationTime: number }> => {

  /*   console.log('📥 Datos recibidos en generateSessionKey → dataMap:', dataMap); */

    const sessionUrl = `${config.urlSession}/${config.merchantId}`;
    const channel = config.channel;

    const sessionPayload = {
        channel,
        amount,
        antifraud: {
            clientIp,
            merchantDefineData: {
                MDD4: mdd.email,
                MDD32: mdd.dni,
                MDD75: mdd.type,
                MDD77: mdd.days,
            },
        },
        dataMap: {
            cardholderCity: dataMap.city,
            cardholderCountry: dataMap.country,
            cardholderAddress: dataMap.address,
            cardholderPostalCode: dataMap.postalCode,
            cardholderState: dataMap.state,
            cardholderPhoneNumber: dataMap.phoneNumber,
        },
    };

   /*  console.log('🔎 Payload enviado a Niubiz:', JSON.stringify(sessionPayload, null, 2)); */

    try {
        const response = await axios.post(sessionUrl, sessionPayload, {
            headers: {
                Accept: '*/*',
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        strapi.log.error('Error al generar sesión Niubiz:', error);
        throw error;
    }
};

export const generateAuthorization = async (token: string, amount: string, purchaseNumber: string, tokenId: string, dataMap: locationDataMap): Promise<string> => {
    const authorizationUrl = `${config.urlAuthorization}/${config.merchantId}`;
    const channel = config.channel;

    const authorizationPayload = {
        captureType: 'manual', // SIEMPRE ES MANUAL
        channel,
        countable: true, // TRUE PARA LIQUIDACION AUTOMATICA
        order: {
            amount,
            currency: "PEN",
            purchaseNumber,
            tokenId
        },
        dataMap: { // Cliente
            urlAddress: dataMap.urlAddress, //Dinámico
            partnerIdCode: "", //En blanco
            serviceLocationCityName: dataMap.city,
            serviceLocationCountrySubdivisionCode: dataMap.state,
            serviceLocationCountryCode: dataMap.country,
            serviceLocationPostalCode: dataMap.postalCode
        }
    };

    try {
       /*  console.log('🔎 Payload enviado a Niubiz:', JSON.stringify(authorizationPayload, null, 2)); */

        const response = await axios.post(
            authorizationUrl,
            authorizationPayload,
            {
                headers: {
                    Accept: '*/*',
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        const niubizError = error.response?.data || error.message;
        console.error('❌ Error al generar autorización Niubiz:', niubizError);
        throw new Error(JSON.stringify(niubizError));
    }
};
