import { defineCollection, z } from 'astro:content';

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    summary: z.string(),
    specs: z.array(z.string()),
    applications: z.array(z.string()),
    order: z.number().default(1),
    sections: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      badge: z.string().optional(),
      price: z.string().optional(),
      inclusions: z.array(z.string()).optional(),
    })).optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string(),
    category: z.string(),
    readTime: z.string(),
  }),
});

export const collections = {
  servicos: servicosCollection,
  blog: blogCollection,
};
