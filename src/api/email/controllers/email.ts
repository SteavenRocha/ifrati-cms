/**
 * A set of functions called "actions" for `email`
 */
'use strict'

module.exports = {
    async submitContactEmail(ctx) {
        const { name, email, phone, subject, message } = ctx.request.body

        if (!name || !email || !message || !subject) {
            return ctx.badRequest('Faltan datos requeridos')
        }

        const fecha = new Intl.DateTimeFormat('es-PE', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'America/Lima',
        }).format(new Date())

        // Enviar correo al admin
        await strapi.plugin('email').service('email').send({
            to: process.env.ZOHO_USER,
            subject: 'Nuevo mensaje del formulario de contacto',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #DC6722; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Material_Symbols_Info_0f8815908f.png"
                                                    alt="Mail icon" width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">Nueva consulta recibida</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Un usuario ha completado el formulario de contacto</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #fcf0e9;">Detalles
                                                del contacto</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <!-- Fila: Nombre y Correo -->
                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre Completo</p>
                                                        <p style="margin-top: 5px;">${name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                </tr>

                                                <!-- Fila: Teléfono y Fecha -->
                                                <tr>
                                                    ${phone ? `
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Teléfono</p>
                                                        <p style="margin-top: 5px;">${phone}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                    ` : `
                                                    <td colspan="2" valign="top">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                    `}
                                                </tr>

                                                <!-- Fila: Asunto -->
                                                <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Asunto</p>
                                                        <p style="margin-top: 5px;">${subject}</p>
                                                    </td>
                                                </tr>

                                                <!-- Fila: Mensaje -->
                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Mensaje completo</h4>
                                                        <p style="margin: 0;">"${message || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>

                                                <!-- Botón -->
                                                <tr>
                                                    <td colspan="2" align="center" style="padding: 10px 0;">
                                                        <a href="https://api.ifrati.org.pe/admin" target="_blank"
                                                            rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; background-color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; border: 1px solid #dbdbdb;">Ver
                                                            en Panel Admin</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;"><strong>Recordatorio:</strong> El tiempo de respuesta objetivo es de
                                                24-48 horas hábiles.</p>
                                            <p style="margin: 0;">Este correo fue enviado automáticamente desde el sistema de
                                                formularios de contacto.</p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>

                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        // Enviar confirmación al usuario
        await strapi.plugin('email').service('email').send({
            to: email,
            subject: 'Gracias por contactarnos',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #DC6722; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Material_Symbols_Info_0f8815908f.png" alt="Mail icon"
                                                    width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">¡Gracias por contactarnos!</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Hemos recibido tu mensaje correctamente</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #fcf0e9;">
                                                Confirmación de contacto</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <tr>
                                                    <td>
                                                        <p>Estimado/a <strong>${name || 'Usuario'}</strong>,</p>
                                                        <p>Queremos confirmar que hemos recibido tu mensaje enviado el
                                                            <strong>${fecha}</strong> a través de nuestro formulario de contacto.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4>Tu mensaje:</h4>
                                                        <p>"${message || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Nuestro equipo revisará tu consulta y te responderemos en un plazo máximo de
                                                            <strong>24-48 horas hábiles</strong> a través de este mismo correo
                                                            electrónico.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <hr style="border: none; border-top: 1px solid #dbdbdb; margin: 20px 0;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0;">Atentamente,</p>
                                                        <img src="https://api.ifrati.org.pe/uploads/logo_544fbbd601.png" alt="logo"
                                                            style="max-width: 125px; margin: 8px 0;">
                                                        <p style="margin: 0; font-size: 12px; color: #4B5563;">Equipo de Atención al
                                                            Cliente</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.
                                            </p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        return ctx.send({ ok: true, message: 'Correo enviado con éxito' })
    },

    async submitGeneralDonationEmail(ctx) {
        const { type, transactionData, impactData } = ctx.request.body

        if (!type || !transactionData || !impactData) {
            return ctx.badRequest('Faltan datos requeridos')
        }

        const amount = Number(transactionData.amount).toFixed(2)

        const rawDate = transactionData.date // "250718192144"
        let formattedDate = 'Fecha inválida'

        if (rawDate) {
            const year = parseInt(rawDate.slice(0, 2), 10) + 2000
            const month = parseInt(rawDate.slice(2, 4), 10) - 1
            const day = parseInt(rawDate.slice(4, 6), 10)
            const hour = rawDate.slice(6, 8)
            const minute = rawDate.slice(8, 10)

            const meses = [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
            ]

            formattedDate = `${day} de ${meses[month]} del ${year}, ${hour}:${minute}`
        }

        let rows = ''
        const hasImpactContent = (Array.isArray(impactData.sanitizedDetails) && impactData.sanitizedDetails.length > 0)

        if (hasImpactContent) {
            rows = (impactData.sanitizedDetails || []).map(item => `
                <td width="50%" valign="top" style="padding-right: 10px;">
                    <p style="margin: 0; font-weight: bold;">${item.title}</p>
                    <p style="margin-top: 5px;">${item.description}</p>
                </td>
            `).join('')
        }

        // Enviar correo al admin
        await strapi.plugin('email').service('email').send({
            to: process.env.ZOHO_USER,
            subject: 'Nueva Donación',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #EF4444; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Tabler_Heart_Dollar_ab883fc945.png"
                                                    alt="Mail icon" width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">Nueva donación recibida</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Un donante ha realizado una contribución</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p
                                                style="margin: 0; font-size: 16px; border: 1px solid #dbdbdb; background-color: #FEF2F2; padding: 10px; border-radius: 5px;">
                                                <strong>Tipo de donación: </strong> ${type}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #FEF2F2;">Detalles
                                                de la donación</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Donante</p>
                                                        <p style="margin-top: 5px;">${transactionData.name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Monto donado</p>
                                                        <p style="margin-top: 5px;">${amount} ${transactionData.currency}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${transactionData.email}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${formattedDate}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4 style="margin-top: 0;">Detalles de la transacción:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transactionData.purchaseNumber}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${formattedDate}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Donante -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Donante:</strong>
                                                                        ${transactionData.name}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount} ${transactionData.currency}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transactionData.card} ${transactionData.brand}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${transactionData.productDescription}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <!-- Botón -->
                                                <tr>
                                                    <td colspan="2" align="center" style="padding: 10px 0;">
                                                        <a href="https://api.ifrati.org.pe/admin" target="_blank"
                                                            rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; background-color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; border: 1px solid #dbdbdb;">Ver
                                                            en Panel Admin</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.
                                            </p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        // Enviar confirmación al usuario
        await strapi.plugin('email').service('email').send({
            to: transactionData.email,
            subject: 'Gracias por tu donación',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #EF4444; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Mdi_Heart_6fe7e1edd9.png" alt="Mail icon"
                                                    width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">¡Gracias por tu generosa donación!</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Tu apoyo hace la diferencia</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #FEF2F2;">
                                                Confirmación de donación</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <tr>
                                                    <td>
                                                        <p>Estimado/a <strong>${transactionData.name || 'Usuario'}</strong>,</p>
                                                        <p>Desde <strong>IFRATI</strong> queremos expresarte nuestro más sincero
                                                            agradecimiento por tu donación realizada el
                                                            <strong>${formattedDate}</strong> a través de nuestra pagina web.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p style="margin: 0;">Tu contribución nos permite continuar con nuestra misión.
                                                            Gracias a personas como tú, podemos seguir impactando positivamente en la
                                                            vida de nuestros jóvenes.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #F9FAFB; border-radius: 5px;">
                                                        <p style="font-weight: bold;">Tu contribución:</p>
                                                        <h3 style="font-weight: bold;">${amount} ${transactionData.currency}</h3>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4 style="margin-top: 0;">El impacto de tu donación:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                            <!-- Fila: Descripción del impacto -->
                                                            <tr>
                                                                <td colspan="2" valign="top" style="padding-bottom: 15px;">
                                                                    <p style="margin: 0 0 8px 0; font-weight: bold;">${impactData.title}</p>
                                                                    <p style="margin: 0;">
                                                                        ${impactData.description}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fila: Información adicional -->
                                                            ${rows ? `<tr>${rows}</tr>` : ''}
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4 style="margin-top: 0;">Detalles de la transacción:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                           
                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transactionData.purchaseNumber}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${formattedDate}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Donante -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Donante:</strong>
                                                                        ${transactionData.name}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount} ${transactionData.currency}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transactionData.card} ${transactionData.brand}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${transactionData.productDescription}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <hr style="border: none; border-top: 1px solid #dbdbdb; margin: 20px 0;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0;">Atentamente,</p>
                                                        <img src="https://api.ifrati.org.pe/uploads/logo_544fbbd601.png" alt="logo"
                                                            style="max-width: 125px; margin: 8px 0;">
                                                        <p style="margin: 0; font-size: 12px; color: #4B5563;">Equipo de Atención al
                                                            Cliente</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.
                                            </p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        return ctx.send({ ok: true, message: 'Correo enviado con éxito' })
    },

    async submitGoalDonationEmail(ctx) {
        const { type, transactionData, impactData } = ctx.request.body

        if (!type || !transactionData || !impactData) {
            return ctx.badRequest('Faltan datos requeridos')
        }

        const rawDate = transactionData.date // "250718192144"
        let formattedDate = 'Fecha inválida'

        if (rawDate) {
            const year = parseInt(rawDate.slice(0, 2), 10) + 2000
            const month = parseInt(rawDate.slice(2, 4), 10) - 1
            const day = parseInt(rawDate.slice(4, 6), 10)
            const hour = rawDate.slice(6, 8)
            const minute = rawDate.slice(8, 10)

            const meses = [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
            ]

            formattedDate = `${day} de ${meses[month]} del ${year}, ${hour}:${minute}`
        }

        const amount = Number(transactionData.amount)
        const amount__ = Number(transactionData.amount).toFixed(2)
        const goal = Number(impactData.goal)
        const collected = Number(impactData.collected)
        const newCollected = Number(collected + amount)

        const percentage = (goal && newCollected) ? (newCollected / goal) * 100 : 0
        const advencePercentage = (goal && amount) ? (amount / goal) * 100 : 0

        // Enviar correo al admin
        await strapi.plugin('email').service('email').send({
            to: process.env.ZOHO_USER,
            subject: 'Nueva Donación',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #EF4444; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Tabler_Heart_Dollar_ab883fc945.png"
                                                    alt="Mail icon" width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">Nueva donación recibida</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Un donante ha realizado una contribución</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p
                                                style="margin: 0; font-size: 16px; border: 1px solid #dbdbdb; background-color: #FEF2F2; padding: 10px; border-radius: 5px;">
                                                <strong>Tipo de donación: </strong> ${type}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #FEF2F2;">Detalles
                                                de la donación</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Donante</p>
                                                        <p style="margin-top: 5px;">${transactionData.name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Monto donado</p>
                                                        <p style="margin-top: 5px;">${amount__} ${transactionData.currency}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${transactionData.email}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${formattedDate}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; width: 100%;">
                                                        <p style="margin: 0; font-size: 16px; font-weight: bold;">
                                                            Progreso hacia nuestra meta:
                                                            <span style="font-weight: normal;"> ${impactData.title}</span>
                                                        </p>

                                                        <!-- Progress container -->
                                                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="font-family: Arial, sans-serif;">
                                                            <tr>
                                                                <td>
                                                                    <p style="margin: 8px 0; font-weight: bold;">${percentage}%
                                                                        completado</p>

                                                                    <!-- Barra de progreso -->
                                                                    <table width="100%" cellpadding="0" cellspacing="0"
                                                                        role="presentation">
                                                                        <tr>
                                                                            <td style="background-color: #e0e0e0; border-radius: 5px;">
                                                                                <div
                                                                                    style="height: 12px; width: 100%; background-color: #e0e0e0; border-radius: 5px; overflow: hidden;">
                                                                                    <div
                                                                                        style="height: 12px; width: ${percentage}%; background-color: #EF4444;">
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <!-- Texto debajo de la barra -->
                                                                    <p style="margin-top: 10px; font-size: 14px;">
                                                                        <strong>${newCollected} S/.</strong> de <strong>${goal}
                                                                            S/.</strong> recaudado
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4 style="margin-top: 0;">Detalles de la transacción:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                    
                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transactionData.purchaseNumber}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${formattedDate}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Donante:</strong>
                                                                        ${transactionData.name}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transactionData.card} ${transactionData.brand}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount__} ${transactionData.currency}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${transactionData.productDescription}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <!-- Botón -->
                                                <tr>
                                                    <td colspan="2" align="center" style="padding: 10px 0;">
                                                        <a href="https://api.ifrati.org.pe/admin" target="_blank"
                                                            rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; background-color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; border: 1px solid #dbdbdb;">Ver
                                                            en Panel Admin</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.
                                            </p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        // Enviar confirmación al usuario
        await strapi.plugin('email').service('email').send({
            to: transactionData.email,
            subject: 'Gracias por tu donación',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #EF4444; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Mdi_Heart_6fe7e1edd9.png" alt="Mail icon"
                                                    width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">¡Gracias por tu generosa donación!</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Tu donación nos ayuda a alcanzar nuestra meta</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #FEF2F2;">
                                                Confirmación de donación</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <tr>
                                                    <td>
                                                        <p>Estimado/a <strong>${transactionData.name || 'Usuario'}</strong>,</p>
                                                        <p>Desde <strong>IFRATI</strong> queremos expresarte nuestro más sincero
                                                            agradecimiento por tu donación realizada el
                                                            <strong>${formattedDate}</strong> a través de nuestra pagina web.
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p style="margin: 0;">Tu contribución nos permite continuar con nuestra misión.
                                                            Gracias a personas como tú, podemos seguir impactando positivamente en la
                                                            vida de nuestros jóvenes.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #F9FAFB; border-radius: 5px;">
                                                        <p style="font-weight: bold;">Meta especifica:</p>
                                                        <h3 style="font-weight: bold;">${impactData.title}</h3>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <p style="margin-top: 0; font-size: 16px; font-weight: bold;">
                                                            Progreso hacia nuestra meta:
                                                            <span style="font-weight: normal;"> ${impactData.title}</span>
                                                        </p>

                                                        <!-- Progress container -->
                                                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="font-family: Arial, sans-serif;">
                                                            <tr>
                                                                <td>
                                                                    <p style="margin: 0 0 8px 0; font-weight: bold;">${percentage}%
                                                                        completado</p>

                                                                    <table width="100%" cellpadding="0" cellspacing="0"
                                                                        role="presentation">
                                                                        <tr>
                                                                            <td style="background-color: #e0e0e0; border-radius: 5px;">
                                                                                <div
                                                                                    style="height: 12px; width: 100%; background-color: #e0e0e0; border-radius: 5px; overflow: hidden;">
                                                                                    <div
                                                                                        style="height: 12px; width: ${percentage}%; background-color: #EF4444;">
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <p style="margin-top: 10px; font-size: 14px;">
                                                                        <strong>${newCollected} S/.</strong> de <strong>${goal}
                                                                            S/.</strong> recaudado
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td style="padding: 15px; background-color: #F9FAFB; border-radius: 5px;">
                                                    <p style="font-weight: bold;">Tu contribución:</p>
                                                    <h3>Gracias a tu donación de <strong>${amount__}
                                                        ${transactionData.currency}</strong> estamos un <strong>${advencePercentage}%</strong> más cerca
                                                        de nuestra meta.</h3>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4>Detalles de la transacción:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                            
                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transactionData.purchaseNumber}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${formattedDate}</p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Donante:</strong>
                                                                        ${transactionData.name}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transactionData.card} ${transactionData.brand}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount__} ${transactionData.currency}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${transactionData.productDescription}</p>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <hr style="border: none; border-top: 1px solid #dbdbdb; margin: 20px 0;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0;">Atentamente,</p>
                                                        <img src="https://api.ifrati.org.pe/uploads/logo_544fbbd601.png" alt="logo"
                                                            style="max-width: 125px; margin: 8px 0;">
                                                        <p style="margin: 0; font-size: 12px; color: #4B5563;">Equipo de Atención al
                                                            Cliente</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.
                                            </p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        return ctx.send({ ok: true, message: 'Correo enviado con éxito' })
    },

    async submitVolunteerEmail(ctx) {
        const { documentType, documentNumber, name, email, phone, type, availability, experience, motivation } = ctx.request.body

        if (!documentType || !documentNumber || !name || !email || !phone || !type || !availability || !experience || !motivation) {
            return ctx.badRequest('Faltan datos requeridos')
        }

        const fecha = new Intl.DateTimeFormat('es-PE', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'America/Lima',
        }).format(new Date())

        // Enviar correo al admin
        await strapi.plugin('email').service('email').send({
            to: process.env.ZOHO_USER,
            subject: 'Nueva solicitud de voluntariado',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #9333EA; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Fluent_Mdl2_Nonprofit_Logo32_cd875416a9.png"
                                                    alt="Mail icon" width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">Nueva solicitud de voluntariado</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Un candidato ha completado el formulario de registro</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #FAF5FF;">
                                                Información del postulante</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Tipo de documento</p>
                                                        <p style="margin-top: 5px;">${documentType}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Numero de documento</p>
                                                        <p style="margin-top: 5px;">${documentNumber}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre completo</p>
                                                        <p style="margin-top: 5px;">${name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha de envío</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Celular</p>
                                                        <p style="margin-top: 5px;">${phone}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Tipo de voluntariado</p>
                                                        <p style="margin-top: 5px;">${type}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Disponibilidad</p>
                                                        <p style="margin-top: 5px;">${availability}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Experiencia</h4>
                                                        <p style="margin: 0;">${experience || 'Mensaje Predeterminado'}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Motivacion</h4>
                                                        <p style="margin: 0;">${motivation || 'Mensaje Predeterminado'}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <!-- Botón -->
                                                <tr>
                                                    <td colspan="2" align="center" style="padding: 10px 0;">
                                                        <a href="https://api.ifrati.org.pe/admin" target="_blank"
                                                            rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; background-color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; border: 1px solid #dbdbdb;">Ver
                                                            en Panel Admin</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;"><strong>Recordatorio:</strong> El tiempo de respuesta objetivo es de
                                                24-48 horas hábiles.</p>
                                            <p style="margin: 0;">Este correo fue enviado automáticamente desde el sistema de
                                                formularios de voluntariado.</p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>

                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        // Enviar confirmación al usuario
        await strapi.plugin('email').service('email').send({
            to: email,
            subject: 'Gracias por querer ser voluntario',
            html: `
                <html lang="es">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" height="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="width:100%; max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <!-- ICONO -->
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #9333EA; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Fluent_Mdl2_Nonprofit_Logo32_cd875416a9.png"
                                                    alt="Mail icon" width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- TÍTULO -->
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">¡Gracias por querer ser voluntario!</h3>
                                        </td>
                                    </tr>

                                    <!-- MENSAJE PRINCIPAL -->
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Tu solicitud ha sido recibida exitosamente</p>
                                        </td>
                                    </tr>

                                    <!-- CONFIRMACIÓN -->
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #FAF5FF;">
                                                Confirmación de solicitud de voluntariado</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p>Estimado/a <strong>${name || 'Usuario'}</strong>,</p>
                                                        <p>¡Qué emocionante saber que quieres formar parte de nuestro equipo de
                                                            voluntarios! Hemos recibido tu solicitud el <strong>${fecha}</strong> y
                                                            queremos agradecerte por tu interés en contribuir a nuestra causa.</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Tu solicitud está siendo procesada</h4>
                                                        <p style="margin: 0;">Nuestro equipo de coordinación de voluntarios revisará tu
                                                            información y se pondrá en contacto contigo en un plazo máximo de 3-5 días
                                                            hábiles.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="height: 20px;"></td>
                                    </tr>

                                    <!-- RESUMEN -->
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <tr>
                                                    <td colspan="2">
                                                        <h4>Resumen de tu solicitud</h4>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Tipo de documento</p>
                                                        <p style="margin-top: 5px;">${documentType}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Numero de documento</p>
                                                        <p style="margin-top: 5px;">${documentNumber}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre completo</p>
                                                        <p style="margin-top: 5px;">${name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha de envío</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2">
                                                        <p style="margin: 0; font-weight: bold;">Celular</p>
                                                        <p style="margin-top: 5px;">${phone}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Tipo de voluntariado</p>
                                                        <p style="margin-top: 5px;">${type}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Disponibilidad</p>
                                                        <p style="margin-top: 5px;">${availability}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Experiencia</h4>
                                                        <p style="margin: 0;">${experience || 'Mensaje Predeterminado'}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Motivación</h4>
                                                        <p style="margin: 0;">${motivation || 'Mensaje Predeterminado'}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2">
                                                        <hr style="border: none; border-top: 1px solid #dbdbdb; margin: 20px 0;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" colspan="2">
                                                        <p style="margin: 0;">Atentamente,</p>
                                                        <img src="https://api.ifrati.org.pe/uploads/logo_544fbbd601.png" alt="logo"
                                                            style="max-width: 125px; margin: 8px 0;">
                                                        <p style="margin: 0; font-size: 12px; color: #4B5563;">Equipo de Atención al
                                                            Cliente</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- FOOTER -->
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.</p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>

                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        return ctx.send({ ok: true, message: 'Correo enviado con éxito' })
    },

    async submitBookEmail(ctx) {
        const { documentType, documentNumber, firstName, lastName, address, phone, email, productType, description, claimType, claimDetail, consumerRequest } = ctx.request.body

        if (!documentType || !documentNumber || !firstName || !lastName || !address || !phone || !email || !productType || !description || !claimType || !claimDetail || !consumerRequest) {
            return ctx.badRequest('Faltan datos requeridos')
        }

        const fecha = new Intl.DateTimeFormat('es-PE', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'America/Lima',
        }).format(new Date())

        // Enviar correo al admin
        await strapi.plugin('email').service('email').send({
            to: process.env.ZOHO_USER,
            subject: 'Nueva solicitud en el Libro de Reclamaciones',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #DC6722; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Material_Symbols_Book2_28cd573936.png"
                                                    alt="Mail icon" width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">Nueva solicitud en el Libro de Reclamaciones</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Un usuario ha completado el formulario del libro de reclamaciones</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #fcf0e9;">Detalles
                                                del formulario</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">

                                                <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha de recepción</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre Completo</p>
                                                        <p style="margin-top: 5px;">${documentType}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${documentNumber}</p>
                                                    </td>
                                                </tr>

                                                <!-- Fila: Nombre y Correo -->
                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre Completo</p>
                                                        <p style="margin-top: 5px;">${firstName} ${lastName}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Teléfono</p>
                                                        <p style="margin-top: 5px;">${phone}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${address}</p>
                                                    </td>
                                               
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Tipo de Reclamo</p>
                                                        <p style="margin-top: 5px;">${productType}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Descripción del reclamo</h4>
                                                        <p style="margin: 0;">"${description || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>

                                                 <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Reclamo/Queja</p>
                                                        <p style="margin-top: 5px;">${claimType}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Detalle del reclamo o queja</h4>
                                                        <p style="margin: 0;">"${claimDetail || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Pedido del consumidor</h4>
                                                        <p style="margin: 0;">"${consumerRequest || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>


                                                <!-- Botón -->
                                                <tr>
                                                    <td colspan="2" align="center" style="padding: 10px 0;">
                                                        <a href="https://api.ifrati.org.pe/admin" target="_blank"
                                                            rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; background-color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; border: 1px solid #dbdbdb;">Ver
                                                            en Panel Admin</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;"><strong>Recordatorio:</strong> El tiempo de respuesta objetivo es de
                                                24-48 horas hábiles.</p>
                                            <p style="margin: 0;">Este correo fue enviado automáticamente desde el sistema de
                                                formularios de contacto.</p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>

                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        // Enviar confirmación al usuario
        await strapi.plugin('email').service('email').send({
            to: email,
            subject: 'Confirmación de solicitud en el Libro de Reclamaciones - I FRATI',
            html: `
                <html lang="es">
                <body style="font-family: Arial, sans-serif; margin: 0; background-color: #F3F5F9;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3F5F9">
                        <tr>
                            <td align="center" style="padding: 10px 5px;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 5px; padding: 20px;">
                                    <tr>
                                        <td align="center" style="padding: 20px;">
                                            <div
                                                style="background-color: #DC6722; border-radius: 50%; padding: 10px; display: inline-block;">
                                                <img src="https://api.ifrati.org.pe/uploads/Material_Symbols_Book2_28cd573936.png" alt="Mail icon"
                                                    width="40" height="40" style="display: block;">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <h3 style="margin: 0; font-size: 22px;">Solicitud de Reclamo/Queja recibida</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="margin: 0;">Hemos recibido tu reclamo/queja correctamente</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #dbdbdb; border-radius: 5px;">
                                            <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #fcf0e9;">
                                                Detalees de tu solicitud</h3>
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="padding: 10px 20px; font-size: 16px;">
                                                <tr>
                                                    <td colspan="2">
                                                        <p>Estimado/a <strong>${firstName} ${lastName}</strong>,</p>
                                                        <p>Queremos confirmar que hemos recibido tu mensaje enviado el
                                                            <strong>${fecha}</strong> a través de nuestro libro de reclamaciones.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="margin: 0;">
                                                        <p>Nuestro equipo revisará tu reclamo/queja y te responderemos en un plazo máximo de
                                                            <strong>24-48 horas hábiles</strong> a través de este mismo correo
                                                            electrónico.</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2">
                                                        <p><strong>Detalles de tu solicitud</strong></p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha de recepción</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre Completo</p>
                                                        <p style="margin-top: 5px;">${documentType}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${documentNumber}</p>
                                                    </td>
                                                </tr>

                                                <!-- Fila: Nombre y Correo -->
                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Nombre Completo</p>
                                                        <p style="margin-top: 5px;">${firstName} ${lastName}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Teléfono</p>
                                                        <p style="margin-top: 5px;">${phone}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${address}</p>
                                                    </td>
                                               
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Tipo de Reclamo</p>
                                                        <p style="margin-top: 5px;">${productType}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Descripción del reclamo</h4>
                                                        <p style="margin: 0;">"${description || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>

                                                 <tr>
                                                    <td colspan="2" style="padding-top: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Reclamo/Queja</p>
                                                        <p style="margin-top: 5px;">${claimType}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Detalle del reclamo o queja</h4>
                                                        <p style="margin: 0;">"${claimDetail || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                        <h4 style="margin: 0 0 10px 0;">Pedido del consumidor</h4>
                                                        <p style="margin: 0;">"${consumerRequest || 'Mensaje Predeterminado'}"</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <hr style="border: none; border-top: 1px solid #dbdbdb; margin: 20px 0;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0;">Atentamente,</p>
                                                        <img src="https://api.ifrati.org.pe/uploads/logo_544fbbd601.png" alt="logo"
                                                            style="max-width: 125px; margin: 8px 0;">
                                                        <p style="margin: 0; font-size: 12px; color: #4B5563;">Equipo de Atención al
                                                            Cliente</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size: 14px; color: #4B5563; padding-top: 20px;">
                                            <p style="margin: 0;">Este es un mensaje automático, por favor no respondas a este correo.
                                            </p>
                                            <p style="margin: 5px 0;">© 2025 <strong>IFRATI.</strong> Todos los derechos reservados.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                                <tr>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/Pol%C3%ADtica%20de%20privacidad"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Política de
                                                            Privacidad</a>
                                                    </td>
                                                    <td style="padding: 0 10px;">
                                                        <div style="width: 1px; height: 16px; background-color: #999;"></div>
                                                    </td>
                                                    <td align="center">
                                                        <a href="https://ifrati-website.vercel.app/legal/T%C3%A9rminos%20y%20condiciones"
                                                            target="_blank" rel="noopener noreferrer"
                                                            style="text-decoration: none; color: #4B5563; font-size: 14px;">Términos y
                                                            Condiciones</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        })

        return ctx.send({ ok: true, message: 'Correo enviado con éxito' })
    },
}