/**
 * donate-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::donate-page.donate-page', {
    config: {
        find: {
            middlewares: ["api::donate-page.donate-page-populate"]
        }
    }
});