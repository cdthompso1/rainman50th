---
description: Help a friend hide a fun easter egg in the site
user_invocable: true
---

# Add an Easter Egg

Help a contributor hide something fun in the birthday site. The key rule: **never document or label it as an easter egg anywhere**.

## Ideas to suggest

- A hidden HTML comment with a joke (in any `.astro` file)
- A CSS class that reveals a message on hover or focus
- A `console.log` message visible only in DevTools
- An HTML `<abbr>` or `title` attribute with a hidden tooltip
- A fun `<meta>` tag in the `<head>`
- An invisible element that becomes visible under certain conditions
- ASCII art in a comment block
- A hidden message in the page's `alt` text or `aria-label`

## Rules

1. Do NOT add comments like "easter egg here" or "secret" near the hidden content
2. Do NOT mention it in any documentation, README, or CLAUDE.md
3. It should be discoverable only by someone who reads the source or inspects the page
4. Keep it tasteful and on-theme (birthday, dev humor, Rainman jokes)
5. Make sure it doesn't break the page layout or accessibility
6. Run `npm run build` after adding to verify nothing breaks

## Where to add them

- `src/layouts/Layout.astro` — good for `<head>` tricks, scripts, comments
- `src/pages/index.astro` — good for inline comments, hidden elements
- `src/styles/global.css` — good for CSS tricks
- `public/` — good for hidden files
