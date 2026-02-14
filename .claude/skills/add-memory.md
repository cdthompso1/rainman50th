---
description: Walk a friend through adding a memory for Rainman's birthday site
user_invocable: true
---

# Add a Memory

Help the contributor add a memory to Rainman's 50th birthday site.

## Steps

1. Ask for their name (this goes in the `author` field)
2. Ask them to describe a memory, funny moment, or roast of Rainman
3. Ask for an optional year and tags (e.g. "funny", "wholesome", "legendary", "cursed")
4. Create a new file at `src/content/memories/<their-name>.md` (lowercase, hyphens for spaces)
5. Use this frontmatter format:

```markdown
---
author: "Their Name"
title: "A Short Punchy Title"
year: 2015
tags: ["funny", "legendary"]
---

Their memory text goes here. Markdown supported.
```

## Guidelines

- Keep the tone fun — this is a birthday roast/celebration
- Encourage dev humor and inside jokes
- The title should be short and catchy, like a commit message
- Suggest punching up bland text with humor (offer options, don't force it)
- Validate that frontmatter fields are correct before saving
- If they reference the template, show them it's at `src/content/memories/_template.md`
- Run `npm run build` after creating the file to verify it works
