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
                                        <img src="https://api.ifrati.org.pe/uploads/Material_Symbols_Info_38f71ea0fb.png" alt="Mail icon"
                                            width="40" height="40" style="display: block;">
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
                                    <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #F9FAFB;">Detalles
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
                                                style="background-color: #fcf0e9; border-radius: 5px; padding: 15px; margin-top: 10px;">
                                                <h4 style="margin: 0 0 10px 0;">Mensaje completo</h4>
                                                <p style="margin: 0;">"${message || 'Mensaje Predeterminado'}"</p>
                                            </td>
                                        </tr>

                                        <!-- Botón -->
                                        <tr>
                                            <td colspan="2" align="start" style="padding: 10px 0;">
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
                                    <h3 style="font-size: 18px; padding: 20px; margin: 0; background-color: #F9FAFB;">
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
                                            <td style="background-color: #fcf0e9; border-radius: 5px; padding: 15px;">
                                                <h4>Tu mensaje:</h4>
                                                <p>"${message || 'Mensaje Predeterminado'}"</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Nuestro equipo revisará tu consulta y te responderemos en un plazo máximo de
                                                    <strong>24-48 horas hábiles</strong> a través de este mismo correo
                                                    electrónico.</p>
                                                <p>Mientras tanto, te invitamos a explorar nuestros recursos adicionales y
                                                    preguntas frecuentes en nuestro sitio web.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 10px;">
                                                <a href="https://ifrati.org.pe/" target="_blank" rel="noopener noreferrer"
                                                    style="text-decoration: none; color: white; background-color: #DC6722; padding: 10px 20px; border-radius: 5px; display: inline-block;">Visitar
                                                    web</a>
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