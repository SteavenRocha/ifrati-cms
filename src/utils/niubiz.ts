import axios from 'axios';

interface NiubizConfig {
    isDev: boolean;
    urlApiDniReniec: string;
    tokenApiDniReniec: string;
    merchantId: string;
    user: string;
    password: string;
    urlSecurity: string;
    urlSession: string;
    urlAuthorization: string;
    channel: string;
    currency: string;
}

export const getDataDni = async (dni: string) => {
    const config = strapi.config.get('niubiz') as NiubizConfig;

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

export const generateSecurityToken = async () => {
    const config = strapi.config.get('niubiz') as NiubizConfig;

    const authString = Buffer.from(`${config.user}:${config.password}`).toString('base64');

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

export const generateSessionKey = async (amount: number, token: string, channel: string): Promise<string> => {
    const config = strapi.config.get('niubiz') as NiubizConfig;
    const sessionUrl = `${config.urlSession}/${config.merchantId}`;

    const sessionPayload = {
        channel,
        amount,
        antifraud: {
            clientIp: '38.25.26.129', // IP del cliente
            merchantDefineData: { // DATOS DINAMICOS DEL CLIENTE
                MDD4: 'correo.demo@gmail.com',
                MDD32: '202415003', // Identificador unico para cada cliente
                MDD75: 'Invitado', // Tipo de cliente Registrado - Invitado - Empleado
                MDD77: '1', // Dias registrado, si aplica
            },
        },
        dataMap: { //Datos de la empresa
            cardholderCity: 'Lima',
            cardholderCountry: 'PE',
            cardholderAddress: "Jr. La Floresta 147. Urb. Camacho - Surco",
            cardholderPostalCode: "15023",
            cardholderState: "LIM",
            cardholderPhoneNumber: "959863269"
        },
    };

    try {
        const response = await axios.post(
            sessionUrl,
            sessionPayload,
            {
                headers: {
                    Accept: '*/*',
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.sessionKey;
    } catch (error) {
        strapi.log.error('Error al generar sesión Niubiz:', error);
        throw error;
    }
};

export const generateAuthorization = async (token: string, amount: number, tokenId: string, channel: string): Promise<string> => {
    const config = strapi.config.get('niubiz') as NiubizConfig;
    const authorizationUrl = `${config.urlAuthorization}/${config.merchantId}`;
    const purchaseNumber = 2020100901;

    const authorizationPayload = {
        captureType: 'manual',
        channel,
        countable: true,
        order: {
            amount,
            currency: "PEN",
            purchaseNumber,
            tokenId
        },
        dataMap: {
            urlAddress: "https://ifrati.org.pe", //Dinámico
            partnerIdCode: "", //En blanco
            serviceLocationCityName: "Lima",
            serviceLocationCountrySubdivisionCode: "LMA",
            serviceLocationCountryCode: "PER",
            serviceLocationPostalCode: "15023"
        }
    };

    try {
        console.log('🔎 Payload enviado a Niubiz:', JSON.stringify(authorizationPayload, null, 2));
        console.log('🔎 URL de autorización:', authorizationUrl);
        console.log('🔎 Token:', token);

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
