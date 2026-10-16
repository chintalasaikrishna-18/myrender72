# Field Notes

A responsive events discovery experience built for the Render72 brief. It includes:

- a landing page and event catalogue;
- a full event detail view using the event-by-ID endpoint;
- search, category filters and an “open to join” filter;
- explicit loading, empty, error and request-timeout states;
- responsive layouts from mobile through desktop; and
- SEO basics, accessible semantic landmarks, labelled controls, reduced-motion support, and lazy-loaded card imagery.

## Run locally

```bash
npm install
npm run dev
```

The app ships configured for the official public Render72 test API:

```text
https://render72.pages.dev/api/test/events
```

To use a different endpoint, copy `.env.example` to `.env` and set `VITE_EVENTS_API_URL` before starting the development server or build.

## Production build

```bash
npm run build
npm run preview
```

`public/_redirects` provides the SPA fallback needed for direct links such as `/events/<id>` on Cloudflare Pages.
