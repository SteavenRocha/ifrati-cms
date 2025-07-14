export default {
  routes: [
    {
      method: 'POST',
      path: '/email/submitContactEmail',
      handler: 'email.submitContactEmail',
      /* config: {
        policies: [],
        middlewares: [],
      }, */
    },
  ],
};
