import { defineCollection, z } from 'astro:content';

const storySchema = z.object({
  headline: z.string(),
  summary: z.string(),
  sourceCount: z.number(),
  readTime: z.number(),
  hidden: z.boolean().default(false),
});

const editions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    edition: z.string(),
    storyCount: z.number(),
    readTime: z.number(),
    sourceCount: z.number(),
    leadStory: z.object({
      kicker: z.string(),
      headline: z.string(),
      summary: z.string(),
      section: z.enum(['world', 'tech', 'markets', 'culture']),
      sourceCount: z.number(),
      readTime: z.number(),
      breaking: z.boolean().default(false),
      hidden: z.boolean().default(false),
    }),
    sections: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      stories: z.array(storySchema),
    })),
  }),
});

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    badge: z.enum(['world', 'tech', 'markets', 'culture']),
    stories: z.array(z.object({
      headline: z.string(),
      body: z.array(z.string()),
      sources: z.array(z.object({
        name: z.string(),
        url: z.string(),
      })),
      breaking: z.boolean().default(false),
      aiCommentary: z.string().optional(),
    })),
  }),
});

export const collections = { editions, topics };
