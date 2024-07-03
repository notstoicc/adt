// https://docs.astro.build/zh-cn/guides/content-collections/
import { defineCollection, z } from 'astro:content'

const postCollection2024 = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.number(),
    description: z.string().optional(),
    readingTime: z.number().optional(),
  }),
})
const postCollection2025 = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.number(),
    description: z.string().optional(),
    readingTime: z.number().optional(),
  }),
})

export const collections = {
  2024: postCollection2024,
  2025: postCollection2025,
}
