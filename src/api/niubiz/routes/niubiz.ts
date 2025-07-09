export default {
  routes: [
    {
      method: 'POST',
      path: '/niubiz/getSessionInfo',
      handler: 'niubiz.getSessionInfo',
      /* config: {
        policies: [],
        middlewares: [],
      }, */
    },
    {
      method: 'POST',
      path: '/niubiz/getAuthorization',
      handler: 'niubiz.getAuthorization',
      /* config: {
        policies: [],
        middlewares: [],
      }, */
    },
    {
      method: 'GET',
      path: '/niubiz/getDataDni',
      handler: 'niubiz.getDataDni',
      /* config: {
        policies: [],
        middlewares: [],
      }, */
    },
  ],
};