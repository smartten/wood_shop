'use strict';

const READ_ONLY_APIS = {
  'api::global.global': ['find'],
  'api::home-page.home-page': ['find'],
  'api::about-page.about-page': ['find'],
  'api::contact-page.contact-page': ['find'],
  'api::service.service': ['find', 'findOne'],
  'api::post.post': ['find', 'findOne'],
  'api::testimonial.testimonial': ['find'],
  'api::team-member.team-member': ['find'],
};

// The website reads content anonymously, so the public role needs read access.
async function allowPublicRead(strapi) {
  const role = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });
  if (!role) return;

  const permissionQuery = strapi.db.query('plugin::users-permissions.permission');
  for (const [uid, actions] of Object.entries(READ_ONLY_APIS)) {
    for (const action of actions) {
      const name = `${uid}.${action}`;
      const existing = await permissionQuery.findOne({ where: { action: name, role: role.id } });
      if (!existing) {
        await permissionQuery.create({ data: { action: name, role: role.id } });
      }
    }
  }
}

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    await allowPublicRead(strapi);
  },
};
