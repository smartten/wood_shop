const { createCoreController } = require('@strapi/strapi').factories;

const POPULATE = {"logo":true,"logoWhite":true,"quickLinks":true,"socials":true};

module.exports = createCoreController('api::global.global', () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: POPULATE };
    return super.find(ctx);
  },
}));
