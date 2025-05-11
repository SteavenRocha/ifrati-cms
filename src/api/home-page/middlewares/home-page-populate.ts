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
                  icon: {
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
              button: {
                populate: {
                  icon: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              sectionStyle: true
            }
          }
        }
      },
      /*
      "blocks.testimonies-section": {
        populate: {
          testimonies: {
            populate: {
              testimoniesCard: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"]
                  }
                }
              },
              cardStyles: {
                populate: {
                  backgroundColor: true,
                  titleColor: true,
                  textColor: true
                }
              }
            }
          },
          sectionStyles: {
            populate: {
              backgroundColor: true,
              titleColor: true,
              textColor: true,
            }
          }
        }
      },
      "blocks.brands-section": {
        populate: {
          brands: {
            populate: {
              image_icon: {
                fields: ["url", "alternativeText"]
              },
            }
          },
          sectionStyles: {
            populate: {
              backgroundColor: true,
              textColor: true,
            }
          }
        }
      },
      "blocks.donate-section": {
        populate: {
          donateCTA: {
            populate: {
              testimonies: {
                populate: {
                  testimoniesCard: {
                    populate: {
                      image: {
                        fields: ["url", "alternativeText"]
                      }
                    }
                  },
                  cardStyles: {
                    populate: {
                      backgroundColor: true,
                      titleColor: true,
                      textColor: true
                    }
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
              sideImage: {
                fields: ["url", "alternativeText"]
              },
              componentStyles: {
                populate: {
                  backgroundColor: true,
                  titleColor: true,
                  textColor: true
                }
              }
            }
          },
          sectionStyles: {
            populate: {
              backgroundColor: true,
              titleColor: true,
              textColor: true
            }
          }
        }
      },
      "blocks.choose-card": {
        populate: {
          chooseCard: {
            populate: {
              chooseCard: {
                populate: {
                  button: {
                    populate: {
                      icon: {
                        fields: ["url", "alternativeText"]
                      }
                    }
                  },
                  image: {
                    fields: ["url", "alternativeText"]
                  },
                }
              },
              cardStyles: {
                populate: {
                  backgroundColor: true,
                  titleColor: true,
                  textColor: true
                }
              },
            }
          },
          sectionStyles: {
            populate: {
              backgroundColor: true,
              titleColor: true,
              textColor: true
            }
          }
        }
      },
      "blocks.product-section": {
        populate: {
          productSection: {
            populate: {
              productButton : {
                populate: {
                  icon: { 
                    fields: ["url", "alternativeText"]
                  },
                }
              },
              cardStyles: {
                populate: {
                  backgroundColor: true,
                  titleColor: true,
                  textColor: true
                }
              },
            },
          },
          button: {
            populate: {
              icon: { 
                fields: ["url", "alternativeText"]
              },
            }
          },
          sectionStyles: {
            populate: {
              backgroundColor: true,
              titleColor: true,
              textColor: true
            }
          }
        },
      },
      "blocks.faq-section": {
        populate: {
          faq: {
            populate: {
              faqComponent: {
                populate: {
                  icon: { 
                    fields: ["url", "alternativeText"]
                  },
                  faq: true
                }
              },
              cardStyles: {
                populate: {
                  backgroundColor: true,
                  titleColor: true,
                  textColor: true
                }
              },
            },
          },
          sectionStyles: {
            populate: {
              backgroundColor: true,
              titleColor: true,
              textColor: true
            }
          }
        },
      } */
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
