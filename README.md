# Valentine Astro Site

Single-page Valentine website built with Astro + Tailwind, including:

- Clickable rotating name in `Happy Valentine's {x}`
- Theme-aware animated gradient background (Nemo gets Nemo colors)
- Envelope-style `open me` button with ripple interaction
- Animated handwritten letter reveal

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## GitHub Pages deployment

A workflow is included at `.github/workflows/deploy.yml`.

1. Push this repository to GitHub.
2. Ensure your default branch is `main`.
3. In GitHub, open `Settings -> Pages` and set `Source` to `GitHub Actions`.
4. Push to `main` and the workflow will build and deploy automatically.

`astro.config.mjs` automatically sets the correct `base` path on GitHub Actions:

- `/<repo-name>` for project pages
- `/` for `<owner>.github.io` user/org pages

If you want a custom production URL, set `SITE` as a repository environment variable.
