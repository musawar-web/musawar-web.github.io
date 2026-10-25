# Musawar Portfolio — Next.js

Modern dark portfolio built with Next.js, Tailwind CSS v4, Motion for React, and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Because `next.config.mjs` uses `output: "export"`, Next.js generates a static `out/` folder.

## GitHub Pages

This repo is configured for the current project-page path `musawar.github.io` when built inside GitHub Actions.

If you later rename the repository, update the `repo` value in `next.config.mjs`.

## Assets

- `public/mk-logo.png`
- `public/musawar.jpg`
- `public/projects/saltite.png`
- `public/projects/skylite.png`
- `public/projects/nutrisalt.png`

## Contact form

The contact form posts to FormSubmit using `musawarkahloon991@gmail.com`. FormSubmit may require one-time email activation on first submission.
