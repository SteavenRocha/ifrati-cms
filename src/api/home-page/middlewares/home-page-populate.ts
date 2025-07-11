/**
 * `home-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  sections: {
    on: {
      "blocks.hero-section": {
        populate: {
          hero: {
            populate: {
              sideImage: {
                fields: ["url", "alternativeText"]
              },
              buttons: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              heroStyle: {
                populate: {
                  backgroundImage: {
                    fields: ["url", "alternativeText"]
                  },
                }
              }
            }
          },
          socialProof: {
            populate: {
              statistics: {
                populate: {
                  resource: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              statisticsStyle: true
            }
          }
        }
      },
      "blocks.about-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          button: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              }
            }
          },
          sideImage: {
            fields: ["url", "alternativeText"]
          },
          sectionStyle: true
        }
      },
      "blocks.program-section": {
        populate: {
          program: {
            populate: {
              pill: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                  pillStyle: true
                }
              },
              video: {
                populate: {
                  video: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              button: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              sectionStyle: true
            }
          },
          howHelp: {
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
                      },
                      icon: {
                        fields: ["url", "alternativeText"]
                      }
                    }
                  },
                  cardButton: {
                    populate: {
                      icon: {
                        fields: ["url", "alternativeText"]
                      }
                    }
                  },
                  cardStyle: true
                }
              },
              sectionStyle: true
            }
          }
        }
      },
      "blocks.testimonials-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          testimonialsSection: {
            populate: {
              testimonies: {
                populate: {
                  image: {
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
      "blocks.brands-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          brands: {
            populate: {
              image: {
                fields: ["url", "alternativeText"]
              },
            }
          },
          sectionStyle: true
        }
      },
      "blocks.donate-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          donors: {
            fields: ["url", "alternativeText"]
          },
          buttons: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              }
            }
          },
          sectionStyle: true
        }
      },
      "blocks.choose-section": {
        populate: {
          pill: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              pillStyle: true
            }
          },
          choose: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"]
              },
              image: {
                fields: ["url", "alternativeText"]
              },
              benefits: {
                populate: {
                  textComponent: true
                }
              },
              characteristics: true,
              button: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  },
                }
              }
            }
          },
          chooseStyles: true,
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
          contactInformation: true,
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
    strapi.log.info('In home-page-populate middleware.');

    await next();
  };
};
