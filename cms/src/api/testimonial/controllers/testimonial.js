const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"avatar":true};

module.exports = createCoreController('api::testimonial.testimonial', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.findOne(ctx);
  },
}));
