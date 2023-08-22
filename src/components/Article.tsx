import type { PropsWithChildren } from "react";
import BlogTag from "./BlogTag";
import type { z } from "astro:content";
import type { articleSchema } from "@lib/schemas";

type Props = PropsWithChildren & {
  article: z.infer<typeof articleSchema>;
  sm?: boolean;
};

export default function Article({ children, article, sm }: Props) {
  return (
    <div>
      <div className={`flex flex-col ${sm ? "gap-3 my-3" : "gap-5 my-5"}`}>
        <h1 className={sm ? "text-2xl" : "text-4xl"}>{article.title}</h1>
        <div className="flex gap-2">
          {article.tags.map((tag, index) => (
            <BlogTag key={index}>{tag}</BlogTag>
          ))}
        </div>
      </div>
      <div className="prose prose-invert">{children}</div>
    </div>
  );
}
