const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"cover":true};

module.exports = createCoreController('api::post.post', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.findOne(ctx);
  },
}));
