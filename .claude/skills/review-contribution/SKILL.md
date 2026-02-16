---
description: Review and polish a contribution before merging
user_invocable: true
---

# Review a Contribution

Review a contributor's memory file or other changes for quality and correctness.

## Checklist

1. **Frontmatter validation**
   - `author` is a non-empty string
   - `title` is short and punchy (under ~60 chars)
   - `year` is a number if present (not a string)
   - `tags` is an array of strings if present

2. **Content quality**
   - Is it fun/engaging? Suggest improvements if bland
   - Check for typos and grammar issues
   - Make sure markdown renders correctly
   - Ensure the tone fits (celebratory roast, not mean-spirited)

3. **Technical checks**
   - File is in `src/content/memories/` with a `.md` extension
   - Filename is lowercase with hyphens (e.g. `jake-smith.md`)
   - File is not named `_template.md` (that's reserved)
   - Run `npm run build` to verify the site builds with the new content

4. **Easter egg protection**
   - If the contribution touches files outside of `src/content/memories/`, check that it doesn't accidentally reveal or label any existing easter eggs
   - Don't point out easter eggs in review comments

## Output

Provide a summary:
- What looks good
- What needs changes (if anything)
- Whether the build passes
