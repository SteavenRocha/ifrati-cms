/**
 * footer-configuration router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::footer-configuration.footer-configuration', {
    config: {
        find: {
            middlewares: ["api::footer-configuration.footer-configuration-populate"]
        }
    }
});
