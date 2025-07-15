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
                                                <img src="https://api.ifrati.org.pe/uploads/Material_Symbols_Info_38f71ea0fb.png"
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
                                                <img src="https://api.ifrati.org.pe/uploads/Mdi_Email_5c68617875.png" alt="Mail icon"
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
        const { name, email, amount, title, description, aditional, transaction, type } = ctx.request.body

        if (!type || !name || !email || !amount || !title || !description || !aditional || !transaction) {
            return ctx.badRequest('Faltan datos requeridos')
        }

        const fecha = new Intl.DateTimeFormat('es-PE', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'America/Lima',
        }).format(new Date())

        const rows = aditional.map(item => `
            <td width="50%" valign="top" style="padding-right: 10px;">
                <p style="margin: 0; font-weight: bold;">${item.title}</p>
                <p style="margin-top: 5px;">${item.description}</p>
            </td>
        `).join('')

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
                                                <img src="https://api.ifrati.org.pe/uploads/Healthicons_Dollar_15dd034ceb.png"
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
                                                        <p style="margin-top: 5px;">${name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Monto donado</p>
                                                        <p style="margin-top: 5px;">${amount}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4 style="margin-top: 0;">Detalles de la transacción:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                            <!-- Estado -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Estado:</strong> ${transaction.state}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transaction.number}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${fecha}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transaction.card}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${title}</p>
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
            to: email,
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
                                                <img src="https://api.ifrati.org.pe/uploads/Mdi_Heart_47e52419d3.png" alt="Mail icon"
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
                                                        <p>Querido/a <strong>${name || 'Usuario'}</strong>,</p>
                                                        <p>Desde <strong>IFRATI</strong> queremos expresarte nuestro más sincero
                                                            agradecimiento por tu donación realizada el
                                                            <strong>${fecha}</strong> a través de nuestra pagina web.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #F9FAFB; border-radius: 5px;">
                                                        <p style="font-weight: bold;">Tu contribucion:</p>
                                                        <h3 style="font-weight: bold;">${amount} PEN</h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Tu contribución nos permite continuar con nuestra misión.
                                                            Gracias a personas como tú, podemos seguir impactando positivamente en la
                                                            vida de nuestros jovenes.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4 style="margin-top: 0;">El impacto de tu donación:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                            <!-- Fila: Descripción del impacto -->
                                                            <tr>
                                                                <td colspan="2" valign="top" style="padding-bottom: 15px;">
                                                                    <p style="margin: 0 0 8px 0; font-weight: bold;">${title}</p>
                                                                    <p style="margin: 0;">
                                                                        ${description}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fila: Información adicional -->
                                                            <tr>
                                                                ${rows}
                                                            </tr>
                                                        </table>
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
                                                            <!-- Estado -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Estado:</strong> ${transaction.state}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transaction.number}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${fecha}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transaction.card}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${title}</p>
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
        const { name, email, amount, title, percentage, collected, goal, transaction, type } = ctx.request.body

        if (!type || !name || !email || !amount || !title || !transaction || !percentage || !collected || !goal) {
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
                                                <img src="https://api.ifrati.org.pe/uploads/Healthicons_Dollar_15dd034ceb.png"
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
                                                        <p style="margin-top: 5px;">${name}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Monto donado</p>
                                                        <p style="margin-top: 5px;">${amount}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" valign="top" style="padding-right: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Correo electrónico</p>
                                                        <p style="margin-top: 5px;">${email}</p>
                                                    </td>
                                                    <td width="50%" valign="top" style="padding-left: 10px;">
                                                        <p style="margin: 0; font-weight: bold;">Fecha y hora</p>
                                                        <p style="margin-top: 5px;">${fecha}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2"
                                                        style="background-color: #F9FAFB; border-radius: 5px; padding: 15px; width: 100%;">
                                                        <p style="margin: 0; font-size: 16px; font-weight: bold;">
                                                            Progreso hacia nuestra meta:
                                                            <span style="font-weight: normal;"> ${title}</span>
                                                        </p>

                                                        <!-- Progress container -->
                                                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="font-family: Arial, sans-serif;">
                                                            <tr>
                                                                <td>
                                                                    <p style="margin: 0 0 8px 0; font-weight: bold;">${percentage}%
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
                                                                        <strong>${collected} S/.</strong> de <strong>${goal}
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
                                                            <!-- Estado -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Estado:</strong> ${transaction.state}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transaction.number}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${fecha}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transaction.card}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${title}</p>
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
            to: email,
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
                                                <img src="https://api.ifrati.org.pe/uploads/Mdi_Heart_47e52419d3.png" alt="Mail icon"
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
                                                        <p>Querido/a <strong>${name || 'Usuario'}</strong>,</p>
                                                        <p>Desde <strong>IFRATI</strong> queremos expresarte nuestro más sincero
                                                            agradecimiento por tu donación realizada el
                                                            <strong>${fecha}</strong> a través de nuestra pagina web.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #F9FAFB; border-radius: 5px;">
                                                        <p style="font-weight: bold;">Meta especifica:</p>
                                                        <h3 style="font-weight: bold;">${title}</h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" style="height: 20px;"></td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px; background-color: #F9FAFB; border-radius: 5px;">
                                                        <p style="font-weight: bold;">Tu contribucion:</p>
                                                        <h3 style="font-weight: bold;">${amount} PEN</h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Tu contribución nos permite continuar con nuestra misión.
                                                            Gracias a personas como tú, podemos seguir impactando positivamente en la
                                                            vida de nuestros jovenes.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <p style="margin-top: 0; font-size: 16px; font-weight: bold;">
                                                            Progreso hacia nuestra meta:
                                                            <span style="font-weight: normal;"> ${title}</span>
                                                        </p>

                                                        <!-- Progress container -->
                                                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="font-family: Arial, sans-serif;">
                                                            <tr>
                                                                <td>
                                                                    <p style="margin: 0 0 8px 0; font-weight: bold;">${percentage}% completado</p>

                                                                    <table width="100%" cellpadding="0" cellspacing="0"
                                                                        role="presentation">
                                                                        <tr>
                                                                            <td style="background-color: #e0e0e0; border-radius: 5px;">
                                                                                <div
                                                                                    style="height: 12px; width: 100%; background-color: #e0e0e0; border-radius: 5px; overflow: hidden;">
                                                                                    <div style="height: 12px; width: ${percentage}%; background-color: #EF4444;"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <p style="margin-top: 10px; font-size: 14px;">
                                                                        <strong>${collected} S/.</strong> de <strong>${goal} S/.</strong> recaudado
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
                                                    <td style="background-color: #F9FAFB; border-radius: 5px; padding: 15px;">
                                                        <h4>Detalles de la transacción:</h4>

                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                            style="font-size: 16px;">
                                                            <!-- Estado -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Estado:</strong> ${transaction.state}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Número de pedido -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Número de pedido:</strong>
                                                                        ${transaction.number}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Fecha y hora -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Fecha y hora del pedido:</strong>
                                                                        ${fecha}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Tarjeta -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Tarjeta:</strong> ${transaction.card}
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <!-- Importe -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Importe de la transacción:</strong>
                                                                        ${amount}</p>
                                                                </td>
                                                            </tr>

                                                            <!-- Descripción del producto -->
                                                            <tr>
                                                                <td width="100%" valign="top" style="padding: 5px 0;">
                                                                    <p style="margin: 0;"><strong>Descripción del producto:</strong>
                                                                        ${title}</p>
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
    }
}