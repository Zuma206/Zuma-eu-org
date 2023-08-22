import { z } from "astro:content";

export const articleSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
});
