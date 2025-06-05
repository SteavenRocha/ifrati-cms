/**
 * `complaints-book-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  header: {
    populate: {
      pill: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"]
          },
          pillStyle: true
        }
      },
    }
  },
  companyInformation: {
    populate: {
      icon: {
        fields: ["url", "alternativeText"]
      },
      style: true
    }
  },
  form: {
    populate: {
      titlesSectionForm: true,
      button: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"]
          },
        }
      },
      style: true
    }
  },
  importantInformation: {
    populate: {
      icon: {
        fields: ["url", "alternativeText"]
      },
      list: true,
      style: true
    }
  },
  sectionStyle: true
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In complaints-book-populate middleware.');

    await next();
  };
};
