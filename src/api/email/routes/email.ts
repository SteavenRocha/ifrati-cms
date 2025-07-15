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
    {
      method: 'POST',
      path: '/email/submitGeneralDonationEmail',
      handler: 'email.submitGeneralDonationEmail',
      /* config: {
        policies: [],
        middlewares: [],
      }, */
    },
    {
      method: 'POST',
      path: '/email/submitGoalDonationEmail',
      handler: 'email.submitGoalDonationEmail',
      /* config: {
        policies: [],
        middlewares: [],
      }, */
    },
  ],
};
