/**
 * `donate-page-populate` middleware
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
      "donate-blocks.donation-form": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          donationForm: {
            populate: {
              donationDetails: {
                populate: {
                  impact: {
                    populate: {
                      resource: {
                        fields: ["url", "alternativeText"]
                      },
                    }
                  },
                  aditionalImpact: true,
                  detailsCard: {
                    populate: {
                      resource: {
                        fields: ["url", "alternativeText"]
                      },
                    }
                  },
                }
              },
              formStyle: true
            }
          },
          specificGoalsForm: {
            populate: {
              cardStyle: true,
              cta: {
                populate: {
                  ctaStyle: true
                }
              },
              formStyle: true
            }
          },
          volunteerForm: {
            populate: {
              card: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                  characteristics: true
                }
              },
              cardStyle: true,
              form: {
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
              formStyle: true,
            }
          },
          sectionStyle: true
        }
      },
      "donate-blocks.important-section": {
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
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                  listCard: true
                }
              },
              cardStyle: true
            }
          },
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
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In donate-page-populate middleware.');

    await next();
  };
};
