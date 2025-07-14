/* export default () => ({ }); */

module.exports = {
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.zoho.com',
                port: 465, 
                secure: true,
                auth: {
                    user: process.env.ZOHO_USER,
                    pass: process.env.ZOHO_PWD
                }
            },
            settings: {
                defaultFrom: process.env.ZOHO_USER,
                defaultReplyTo: process.env.ZOHO_USER
            }
        }
    }
}