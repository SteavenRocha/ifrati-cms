/**
 * complaints-book router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::complaints-book.complaints-book', {
    config: {
        find: {
            middlewares: ["api::complaints-book.complaints-book-populate"]
        }
    }
});