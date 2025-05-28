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
  styleSettings: true,
  pillSettings: true,
  contactSettings: {
    populate: {
      pill: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"]
          },
          pillStyle: true
        }
      },
      contactCard: {
        populate: {
          button: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
            }
          },
        }
      },
      contactInformation: {
        populate: {
          information: {
            populate: {
              resource: {
                fields: ["url", "alternativeText"]
              },
            }
          },
        }
      },
      sectionStyle: true
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In website-configuration-populate middleware.');

    await next();
  };
};
