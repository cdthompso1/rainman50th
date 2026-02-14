# Rainman's 50th Birthday Site

A single-page static birthday site for Rainman, built with Astro. Deployed to AWS Amplify.

## Quick Start

```bash
npm install
npm run dev      # Local dev server
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Project Structure

- `src/pages/index.astro` — Main (only) page
- `src/layouts/Layout.astro` — HTML shell with retro terminal theme
- `src/components/Memory.astro` — Renders a single memory card
- `src/content/memories/*.md` — One markdown file per contributor's memory
- `src/content/memories/_template.md` — Template for new contributions
- `src/styles/global.css` — Global styles (terminal/retro aesthetic)
- `public/` — Static assets (favicon, etc.)

## Adding a Memory

1. Copy `src/content/memories/_template.md` to `src/content/memories/your-name.md`
2. Fill in the frontmatter (`author`, `title`, optional `year` and `tags`)
3. Write your memory in markdown below the frontmatter
4. Run `npm run build` to verify it works

Or use the `/add-memory` skill to be guided through it.

## Content Schema

Each memory file requires this frontmatter:

```yaml
author: "Your Name"       # required
title: "Short Title"      # required
year: 2020                # optional, number
tags: ["funny"]           # optional, array of strings
```

## Conventions

- Single page, no routing — everything renders on `index.astro`
- Static output only (no SSR)
- Retro terminal theme: dark background, monospace fonts, green/amber/cyan accents
- Keep the tone fun — this is a birthday celebration/roast
