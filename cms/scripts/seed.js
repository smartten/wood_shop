'use strict';

// Loads the content that used to be hard-coded in the React app into Strapi.
// Run with `npm run seed`. It does nothing if content already exists.

const fs = require('fs');
const path = require('path');
const { createStrapi, compileStrapi } = require('@strapi/strapi');

const ASSETS = path.join(__dirname, '..', 'seed-assets');
const MIME = { '.jpg': 'image/jpeg', '.png': 'image/png' };

const uploaded = new Map();

async function upload(strapi, fileName, alt) {
  if (uploaded.has(fileName)) return uploaded.get(fileName);
  const filepath = path.join(ASSETS, fileName);
  const [file] = await strapi.plugin('upload').service('upload').upload({
    files: {
      filepath,
      originalFileName: fileName,
      size: fs.statSync(filepath).size,
      mimetype: MIME[path.extname(fileName)],
    },
    data: { fileInfo: { name: fileName, alternativeText: alt || fileName, caption: alt || fileName } },
  });
  uploaded.set(fileName, file.id);
  return file.id;
}

const create = (strapi, uid, data) => strapi.documents(uid).create({ data, status: 'published' });

const LOREM =
  'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.';

async function seed(strapi) {
  if (await strapi.documents('api::global.global').findFirst()) {
    strapi.log.info('Content already exists, skipping seed.');
    return;
  }
  const img = (name, alt) => upload(strapi, name, alt);

  const intro = async () => ({
    image: await img('wood1-about.png', 'Flooring craftsman at work'),
    stats: [
      { value: 240, label: 'Private Client Service' },
      { value: 24, label: 'Years of Experience' },
    ],
    title: 'Do you need flooring services?',
    text:
      "With our expert staff, we add a new perspective to your home in economic, luxury, fast and quality flooring and installation services. Choose the flooring service package that fits your budget, and we'll come and renew it right away.",
    features: [
      {
        icon: 'smile',
        title: 'Professional Team',
        text: 'We produce guaranteed solutions in all flooring works with our competent and experienced team.',
      },
      {
        icon: 'clock',
        title: 'Quick Flooring',
        text: 'Thanks to our solid expertise, we build custom spaces by covering your floors very quickly.',
      },
    ],
    buttonText: 'Get to know us',
    buttonUrl: '/about-us',
  });

  // Global
  await create(strapi, 'api::global.global', {
    siteName: 'Wood Shop',
    logo: await img('wood-logo.png', 'Wood Shop logo'),
    logoWhite: await img('wood-logo-white.png', 'Wood Shop logo (white)'),
    phone: '+1 (234) 567 89 10',
    email: 'example@mail.com',
    address: 'New Jersey, USA',
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navAllServices: 'All Services',
    navBlog: 'Blog',
    navContact: 'Contact',
    newsletterTitle: 'Join Our Newsletter',
    newsletterText: 'Subscribe to be informed about our services and products.',
    newsletterPlaceholder: 'Your Email Address',
    newsletterButton: 'Send',
    footerServicesTitle: 'Services',
    footerLinksTitle: 'Quick Links',
    footerTouchTitle: 'Get In Touch',
    quickLinks: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about-us' },
      { label: 'Blog', url: '/blog' },
      { label: 'Packages', url: '/all-services' },
      { label: 'Contact', url: '/contact' },
    ],
    socials: [
      { platform: 'instagram', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'instagram', url: '#' },
    ],
    namePlaceholder: 'Full Name',
    emailPlaceholder: 'Email Address',
    phonePlaceholder: 'Phone Number',
    messagePlaceholder: 'Your Message',
    sidebarFormTitle: 'Leave Your Number',
    sidebarFormSubtitle: "Let's Call You Back",
    sidebarFormButton: 'Submit Form',
  });

  // Home
  const slide = async (lineOne, lineTwo, subtitle, image) => ({
    lineOne,
    lineTwo,
    subtitle,
    buttonText: 'Learn More',
    buttonUrl: '/all-services',
    image: await img(image, lineOne),
  });
  await create(strapi, 'api::home-page.home-page', {
    slides: [
      await slide('Innovative Modern ', 'Flooring Service', 'Custom flooring within your budget.', 'slider-wood-3.jpg'),
      await slide('Do You Need', 'Flooring Service', 'Then you are in the right place', 'slider-wood-1.jpg'),
      await slide('Get Flooring', 'Service Now', 'Then you are in the right place', 'slider-wood-2.jpg'),
    ],
    intro: await intro(),
    servicesHeading: { title: 'Our Flooring Services', subtitle: 'We are at your service for all your flooring.' },
    cta: {
      image: await img('img-contact.jpg', 'Flooring project'),
      title: "Let's Create A Great Design Together!",
      subtitle: 'Fill out the detailed information form about our flooring services.',
      buttonText: 'Call Back',
    },
    testimonialsHeading: { title: 'What Are Our Customers Saying ?', subtitle: 'Opinions from our happy customers.' },
  });

  // About
  await create(strapi, 'api::about-page.about-page', {
    title: 'About Us',
    intro: await intro(),
    values: Array.from({ length: 4 }, () => ({ icon: 'like', title: 'Reliability', text: LOREM })),
    teamHeading: { title: 'Our Flooring Masters', subtitle: 'We are at your service with our competent staff.' },
  });

  // Contact
  await create(strapi, 'api::contact-page.contact-page', {
    title: 'Contact',
    cards: [
      { icon: 'phone', title: 'CUSTOMER SERVICE', text: '+1 (234) 567 89 10' },
      { icon: 'mail', title: 'MAIL ADDRESS', text: 'example@example.com' },
      { icon: 'home', title: 'OFFICE', text: 'Yeşilplnar Mh. Tepe Sk. Eyüp İstanbul' },
    ],
    submitLabel: 'Send Form',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1678332636542!5m2!1svi!2s',
  });

  // Services
  const texts = JSON.parse(fs.readFileSync(path.join(ASSETS, 'service-text.json'), 'utf8'));
  const services = [
    ['Flooring', 'flooring', 'img-service1.jpg'],
    ['Floor Raising', 'floor-raising', 'img-service3.jpg'],
    ['Carpet Flooring', 'carpet-flooring', 'img-service2.jpg'],
    ['PVC Flooring', 'pvc-flooring', 'wood-services-4.jpg'],
    ['Wood Flooring', 'wood-flooring', 'wood-services-5.jpg'],
  ];
  for (const [i, [title, slug, thumb]] of services.entries()) {
    await create(strapi, 'api::service.service', {
      title,
      slug,
      order: i + 1,
      thumbnail: await img(thumb, title),
      heroImage: await img(`service-${slug}.jpg`, title),
      paragraphOne: texts[slug][0],
      paragraphTwo: texts[slug][1],
      highlights: [
        { icon: 'like', title: 'Reliability', text: LOREM },
        { icon: 'like', title: 'Reliability', text: LOREM },
      ],
    });
  }

  // Blog
  const excerpt = 'Vinyl coating applications are products that can be used in […]';
  const cover = await img('news-wood-6.jpg', 'What is vinyl flooring?');
  for (let i = 1; i <= 6; i++) {
    await create(strapi, 'api::post.post', {
      title: 'What is vinyl flooring?',
      slug: i === 1 ? 'what-is-vinyl-flooring' : `what-is-vinyl-flooring-${i}`,
      category: 'Flooring',
      publishDate: '2022-08-06',
      cover,
      excerpt,
      content: [{ type: 'paragraph', children: [{ type: 'text', text: excerpt }] }],
    });
  }

  // Testimonials and team
  const avatar = await img('man1.png', 'Adam');
  for (let i = 1; i <= 4; i++) {
    await create(strapi, 'api::testimonial.testimonial', {
      name: 'Adam',
      quote: 'We needed a floor covering for the living room of our house. They did professional work. Thank you.',
      avatar,
      order: i,
    });
  }
  const photo = await img('people1.jpg', 'Team member');
  for (let i = 1; i <= 4; i++) {
    await create(strapi, 'api::team-member.team-member', { name: 'Hieeus', role: 'Nhan Vien', photo, order: i });
  }

  strapi.log.info('Seed finished.');
}

async function main() {
  const app = await createStrapi(await compileStrapi()).load();
  app.log.level = 'info';
  try {
    await seed(app);
  } finally {
    await app.destroy();
  }
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
