const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"cards":true};

module.exports = createCoreController('api::contact-page.contact-page', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
}));
