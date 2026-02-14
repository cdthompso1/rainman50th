import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const memories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/memories' }),
  schema: z.object({
    author: z.string(),
    title: z.string(),
    year: z.number().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { memories };
