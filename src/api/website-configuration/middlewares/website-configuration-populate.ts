/**
 * `website-configuration-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  globalSettings: {
    populate: {
      logo: {
        fields: ["alternativeText", "url"],
      },
      favicon: {
        fields: ["alternativeText", "url"],
      },
    },
  },
  companyInformation: {
    populate: {
      information: {
        populate: {
          resource: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      floatingWhatsApp: {
        populate: {
          icon: {
            fields: ["alternativeText", "url"],
          },
        },
      }
    },
  },
  styleSettings: true,
  pillSettings: true,
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In website-configuration-populate middleware.');

    await next();
  };
};
