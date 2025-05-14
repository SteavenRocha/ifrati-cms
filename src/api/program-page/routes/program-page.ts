/**
 * program-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::program-page.program-page', {
    config: {
        find: {
            middlewares: ["api::program-page.program-page-populate"]
        }
    }
});