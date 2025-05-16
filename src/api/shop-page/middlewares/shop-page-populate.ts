/**
 * `shop-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  sections: {
    on: {
      "shop-blocks.hero-section": {
        populate: {
          heroStyle: {
            populate: {
              backgroundImage: {
                fields: ["url", "alternativeText"]
              },
            }
          },
        }
      },
      "shop-blocks.shop-section": {
        populate: {
          cardStyle: true,
          sectionStyle: true
        }
      },
      "blocks.faq-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          questions: true,
          sectionStyle: true
        }
      },
      "about-blocks.cta-section": {
        populate: {
          button: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
            }
          },
          ctaStyle: {
            populate: {
              backgroundImage: {
                fields: ["url", "alternativeText"]
              },
            }
          }
        }
      }
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In shop-page-populate middleware.');

    await next();
  };
};
