import { useState, type PropsWithChildren, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { searchTextAtom } from "@lib/search";

type Props = PropsWithChildren & {
  slug?: string;
  text: string;
  tags: string[];
};

export default function Preview({ children, slug, text, tags }: Props) {
  const searchText = useStore(searchTextAtom);
  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tagParam = params.get("tag");
    setTag(tagParam);
  }, []);

  if (!text.toLowerCase().includes(searchText.toLowerCase())) return null;
  if (tag && !tags.includes(tag)) return null;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        location.href = `/article/${slug}`;
      }}
      className="bg-zinc-900 p-5 rounded-lg shadow-md cursor-pointer hover:opacity-75 transition max-h-52 relative overflow-hidden before:absolute before:bg-gradient-to-b before:from-transparent before:to-zinc-900 before:w-full before:h-14 before:left-0 before:bottom-0 active:scale-95"
    >
      {children}
    </div>
  );
}
