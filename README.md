# Rainman's 50th Birthday Site

A retro terminal-themed birthday site for Rainman, built with [Astro](https://astro.build). Each friend contributes a memory as a markdown file, and the site renders them all into a single page.

## Getting Started

```sh
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to ./dist/
```

## Contributing with Claude Code

This repo has [Claude Code](https://claude.com/claude-code) skills built in to make contributing easy. You don't need to know Astro or worry about file formats — just run a skill and follow the prompts.

### Prerequisites

1. Install [Claude Code](https://claude.com/claude-code) if you haven't already
2. Clone this repo and `cd` into it
3. Run `npm install`

### Adding Your Memory

Open Claude Code in this repo and type:

```
/add-memory
```

Claude will walk you through it — ask for your name, your memory of Rainman, and help you write it up with the right format and tone. It creates the markdown file for you and verifies the build.

If you'd rather do it manually, copy `src/content/memories/_template.md` to `src/content/memories/your-name.md` and fill it in.

### Adding an Easter Egg

Want to hide something fun for Rainman to discover? Open Claude Code and type:

```
/add-easter-egg
```

Claude will help you plant a hidden surprise — a CSS trick, a console message, a sneaky HTML comment, whatever you want. The only rule: don't label it as an easter egg anywhere.

### Reviewing a Contribution

Before merging someone's PR, run:

```
/review-contribution
```

Claude will check the markdown frontmatter, content quality, build integrity, and make sure no easter eggs were accidentally exposed.

## Project Structure

```
src/
├── pages/index.astro              # Main page (hero, stats, memories, stack trace)
├── layouts/Layout.astro           # HTML shell with retro terminal theme
├── components/Memory.astro        # Memory card component
├── content/
│   └── memories/                  # One .md file per contributor
│       ├── _template.md           # Copy this to add a memory
│       ├── system.md              # The origin story
│       └── ricky.md               # Example contribution
└── styles/global.css              # Terminal/retro aesthetic
```

## Memory File Format

Each memory is a markdown file in `src/content/memories/` with this frontmatter:

```yaml
---
author: "Your Name"       # required
title: "Short Title"      # required
year: 2020                # optional
tags: ["funny"]           # optional — e.g. "funny", "wholesome", "legendary", "cursed"
---

Your memory goes here. Markdown supported.
```

## Deployment

The site deploys to GitHub Pages automatically upon a commit to main occurring. The legacy amplify.yml file is retained for sentimental reasons.
