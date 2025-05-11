/**
 * header-configuration router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::header-configuration.header-configuration', {
    config: {
        find: {
            middlewares: ["api::header-configuration.header-configuration-populate"]
        }
    }
});

