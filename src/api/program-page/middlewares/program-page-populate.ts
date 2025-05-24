/**
 * `program-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  sections: {
    on: {
      "program-blocks.hero-section": {
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
      "program-blocks.purpose-section": {
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
      "program-blocks.pillars-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          pillars: {
            populate: {
              pillarCard: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                  programComponent: {
                    populate: {
                      textComponent: true
                    }
                  },
                  methodology: true,
                  sideImage: {
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
      "program-blocks.requirements-section": {
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
          requirementsComponent: {
            populate: {
              textComponent: true
            }
          },
          cta: {
            populate: {
              button: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                }
              },
              ctaStyle: true
            }
          },
          sectionStyle: true
        }
      },
      "program-blocks.results-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          quantitativeResults: {
            populate: {
              card: {
                populate: {
                  resource: {
                    fields: ["url", "alternativeText"]
                  },
                }
              },
              cardStyle: true
            }
          },
          qualitativeResults: {
            populate: {
              card: {
                populate: {
                  resource: {
                    fields: ["url", "alternativeText"]
                  },
                }
              },
              cardStyle: true
            }
          },
          sectionStyle: true
        }
      },
      "program-blocks.participate-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          stepsSection: {
            populate: {
              steps: true,
              button: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                }
              },
              sideImage: {
                fields: ["url", "alternativeText"]
              }
            }
          },
          collaboratorsSection: {
            populate: {
              card: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                  button: {
                    populate: {
                      icon: {
                        fields: ["url", "alternativeText"]
                      },
                    }
                  },
                }
              },
              cardStyle: true,
              sideImage: {
                fields: ["url", "alternativeText"]
              }
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
      "blocks.contact-section": {
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
              information : {
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
      },
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In program-page-populate middleware.');

    await next();
  };
};
