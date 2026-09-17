import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(["Explainer", "Field Report", "Opinion", "Review"]),
    topics: z.array(z.string()),
    tags: z.array(z.string()),
    author: z.string(),
    summary: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };
