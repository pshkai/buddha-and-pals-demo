# Buddha & Pals — independent website concept

**Demo:** https://pshkai.github.io/buddha-and-pals-demo/

**Repository:** https://github.com/pshkai/buddha-and-pals-demo

An independent, unsolicited café and jazz website concept for Buddha & Pals in Bangkok. Not affiliated with or endorsed by the business. This is a client-presentation demonstration, not an official operating website.

## Experience

- Responsive editorial page: home, story, day/night experience, menu category guide, jazz information, visit planner, location/contact and guest-feedback links.
- Working café/jazz mood toggle, category filters, mobile navigation and form validation.
- Visit planner with future-date validation in Bangkok time, party size, preferred time/seating and accessible demo summary. No availability checks or reservation submission.
- Phone, supplied Maps, Facebook and Instagram links. LINE pending current verification.
- Original, visibly labeled concept artwork; keyboard controls, focus indicators, reduced-motion support and semantic markup.

## Stack and local development

Dependency-free HTML, CSS and browser JavaScript. Node.js 22+ for build and local serving. No npm installation is required; there are no runtime or build dependencies.

```sh
npm run check
npm run build
npm run dev
```

Open http://127.0.0.1:4173. Static output is in `dist/`. Every internal asset URL is relative, so project-subdirectory hosting works without a router or base-path rewriting.

## Deployment

GitHub Actions validates and builds, uploads `dist/`, and deploys through GitHub Pages. The repository's Pages source must be **GitHub Actions**. Push to `main` or run the workflow manually. No secrets are required in this repository. Pages and Actions must be enabled on the authenticated account.

## Data and demo limitations

See [source research and credits](docs/sources.md) for evidence, conflicts, language uncertainty and the image-generation prompt. Current hours, prices, live music schedule, minimum spend, entry conditions, parking/accessibility and current LINE identity need confirmation. Direct Maps/Facebook/Instagram retrieval was restricted. No Google rating or count is claimed. The page intentionally uses noindex for its unofficial status.

No contact details are collected. Planner values remain in memory in the browser and are not sent or saved. No payment, order or booking occurs. Users must contact the real business to arrange a visit. External links, especially business profiles, remain controlled by their owners. The supplied Maps redirect could not be independently resolved during research.

Hero art: original built-in ImageGen concept at `assets/jazz-concept.webp`, not a venue photograph. CSS illustrations are original. Google Fonts provides DM Sans and Playfair Display with system-font fallbacks. No publicly visible social photographs were reused.

## Validation

`npm run check` checks JavaScript syntax, unique section IDs, anchor destinations, required local files and disclosure markers. Browser QA and live deployment results are recorded in [verification notes](docs/verification.md).
