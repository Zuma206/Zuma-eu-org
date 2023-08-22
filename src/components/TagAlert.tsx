import { useEffect, useState } from "react";
import BlogTag from "./BlogTag";

export default function TagAlert() {
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tagParam = params.get("tag");
    setTag(tagParam);
  }, []);

  if (!tag) return null;

  return (
    <div className="w-full">
      <a
        href="/blog"
        className="bg-zinc-900 px-3 py-2 rounded-full hover:opacity-75 transition block"
      >
        You are filtering by the
        <span className="mx-2">
          <BlogTag>{tag}</BlogTag>
        </span>
        tag, click here to filter by all
      </a>
    </div>
  );
}
