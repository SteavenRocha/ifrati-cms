/**
 * `footer-configuration-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  footer: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      button: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      quickLinks: {
        populate: {
          links: true
        }
      },
      contactLinks: {
        populate: {
          links: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"],
              },
            }
          }
        }
      },
      legalLinks: {
        populate: {
          links: true
        }
      }
    }
  },
  footerComponent: {
    populate: {
      socialLinks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        }
      },
      complaintsBook: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        }
      }
    }
  },
  footerStyle: true
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In footer-configuration-populate middleware.');

    await next();
  };
};
