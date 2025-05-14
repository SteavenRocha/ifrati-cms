/**
 * `about-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  sections: {
    on: {
      "about-blocks.hero-section": {
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
      "about-blocks.mission-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          sideImage: {
            fields: ["url", "alternativeText"]
          },
          sectionStyle: true
        }
      },
      "about-blocks.vision-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          sideImage: {
            fields: ["url", "alternativeText"]
          },
          sectionStyle: true
        }
      },
      "about-blocks.values-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          cardSection: {
            populate: {
              card: {
                populate: {
                  resource: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              cardStyle: true
            }
          },
          sectionStyle: true
        }
      },
      "about-blocks.team-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          cardSection: {
            populate: {
              card: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              cardStyle: true
            }
          },
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
    strapi.log.info('In about-page-populate middleware.');

    await next();
  };
};
