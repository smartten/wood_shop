const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"intro":{"populate":{"image":true,"stats":true,"features":true}},"values":true,"teamHeading":true};

module.exports = createCoreController('api::about-page.about-page', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
}));
