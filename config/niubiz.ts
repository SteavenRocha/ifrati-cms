export default ({ env }) => {
  const isDev = env.bool('DEVELOPMENT', true);

  return {
    isDev,
    urlApiDniReniec: env('API_DNI_RENIEC', 'error'),
    tokenApiDniReniec: env('TOKEN_API_DNI_RENIEC', 'error'),
    merchantId: isDev ? env('DEV_MERCHANT_ID') : env('PRD_MERCHANT_ID'),
    user: isDev ? env('DEV_USER') : env('PRD_USER'), /* USER */
    pwd: isDev ? env('DEV_PWD') : env('PRD_PWD'), /* PASSWORD */
    urlSecurity: isDev ? env('DEV_URL_SECURITY') : env('PRD_URL_SECURITY'),
    urlSession: isDev ? env('DEV_URL_SESSION') : env('PRD_URL_SESSION'),
    urlAuthorization: isDev ? env('DEV_URL_AUTHORIZATION') : env('PRD_URL_AUTHORIZATION'),
    channel: env('CHANNEL', 'web'),
    currency: env('CURRENCY', 'PEN'),
  };
};
