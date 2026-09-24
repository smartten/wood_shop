const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"thumbnail":true,"heroImage":true,"highlights":true};

module.exports = createCoreController('api::service.service', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.findOne(ctx);
  },
}));
