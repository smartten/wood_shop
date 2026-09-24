# Wood Shop

React website whose content is managed in a Strapi CMS (`cms/`).

- `src/` – React frontend (Create React App)
- `cms/` – Strapi 5 backend and admin panel

## Run with Docker

```bash
docker compose up -d --build
docker compose exec cms npm run seed   # first run only: loads the current site content
```

| URL                          | What                                |
| ---------------------------- | ----------------------------------- |
| http://localhost:3000        | Website                             |
| http://localhost:1337/admin  | CMS admin panel (edit content here) |

The first time you open `/admin` Strapi asks you to create an admin account.
`cms/.env` holds the Strapi secrets; if you clone the repo fresh, copy
`cms/.env.example` to `cms/.env` and replace the placeholder secrets.

Content, media and the database live in the `db_data` and `cms_uploads` Docker volumes.

## Run for development

```bash
cd cms && npm install && npm run seed && npm run develop   # http://localhost:1337/admin
npm install && npm start                                   # http://localhost:3000
```

The frontend proxies `/api` and `/uploads` to Strapi (`proxy` in `package.json`).
Set `REACT_APP_CMS_URL` at build time to point at a CMS on another origin.

## What you can edit in the CMS

| Admin section                 | Controls                                                                  |
| ----------------------------- | ------------------------------------------------------------------------- |
| Global                        | Logo, phone, email, address, menu labels, footer, form placeholders       |
| Home Page                     | Hero slides, intro block, section headings, callback form block           |
| About Page                    | Title, intro block, "Reliability" cards, team heading                     |
| Contact Page                  | Title, contact cards, map embed URL, button label                         |
| Services                      | One entry per service page (also drives menus, footer and sliders)        |
| Posts                         | Blog posts (shown at `/blog` and `/blog/<slug>`)                          |
| Testimonials / Team Members   | Customer quotes on Home, staff on About Us                                |

Add a new service and it appears in the menu, footer, slider and gets its own
page at `/<slug>` without any code change. Remember to click **Publish** after saving.
