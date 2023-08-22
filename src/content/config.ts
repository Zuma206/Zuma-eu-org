import { articleSchema } from "@lib/schemas";
import { defineCollection } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: articleSchema,
});

export const collections = {
  articles,
};
