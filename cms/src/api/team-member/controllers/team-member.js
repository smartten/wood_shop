const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"photo":true};

module.exports = createCoreController('api::team-member.team-member', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.findOne(ctx);
  },
}));
