const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"slides":{"populate":{"image":true}},"intro":{"populate":{"image":true,"stats":true,"features":true}},"servicesHeading":true,"cta":{"populate":{"image":true}},"testimonialsHeading":true};

module.exports = createCoreController('api::home-page.home-page', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
}));
