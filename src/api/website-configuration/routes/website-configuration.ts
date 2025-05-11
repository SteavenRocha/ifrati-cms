/**
 * website-configuration router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::website-configuration.website-configuration', {
    config: {
        find: {
            middlewares: ["api::website-configuration.website-configuration-populate"]
        }
    }
});