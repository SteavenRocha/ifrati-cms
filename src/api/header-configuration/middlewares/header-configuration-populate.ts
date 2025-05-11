/**
 * `header-configuration-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  header: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      links: true,
      button: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      headerStyle: true
    },

  },
  headerUp: {
    populate: {
      social: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      data: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      headerUpStyle: true
    },
  },
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In header-configuration-populate middleware.');

    await next();
  };
};
