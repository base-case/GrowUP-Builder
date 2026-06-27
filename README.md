# GrowUP Developers — Website (Demo)

Marketing website for **GrowUP Developers**, a (fictional) real-estate builder.
Built with **React + Vite + Tailwind CSS v4** and **React Router**.

> All content, projects, prices and images are **dummy/demo data** for presentation only.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, categories, featured projects, why-us, amenities, testimonials, leadership, enquiry |
| `/projects` | All projects with Status & Type filters |
| `/projects/:slug` | Project detail — gallery, facts, plans, amenities, map, sticky enquiry |
| `/about` | Company story, mission/vision/values, timeline, leadership |
| `/contact` | Contact info + enquiry form + map |

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Where to edit content

- **Company info, stats, amenities, testimonials, team, milestones** → `src/data/site.js`
- **Projects (the catalogue)** → `src/data/projects.js`
- **Brand colors & fonts** → `src/index.css` (the `@theme` block)

## Notes

- The enquiry form is **front-end only** (logs to console). Wire it to an API/email service for production.
- Images load from Unsplash over the network; swap with the client's real photos.
- Replace the placeholder logo (`G` mark) and RERA / contact details before launch.
