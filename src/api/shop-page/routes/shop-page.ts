/**
 * shop-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::shop-page.shop-page', {
    config: {
        find: {
            middlewares: ["api::shop-page.shop-page-populate"]
        }
    }
});