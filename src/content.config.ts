import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    language: z.enum(['ja', 'en']),
    translationSlug: z.string().optional(),
    sources: z.array(z.string().url()),
    description: z.string().optional(),
  }),
});

export const collections = {
  articles,
};
