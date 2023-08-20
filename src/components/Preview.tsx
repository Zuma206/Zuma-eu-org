import type { PropsWithChildren } from "react";

export default function Preview({ children }: PropsWithChildren) {
  return (
    <a
      href="/blog/slug"
      className="prose-sm max-w-md bg-zinc-900 p-5 rounded-lg shadow-md cursor-pointer hover:opacity-75 transition max-h-40 relative overflow-hidden before:absolute before:bg-gradient-to-b before:from-transparent before:to-zinc-900 before:w-full before:h-14 before:left-0 before:bottom-0"
    >
      {children}
    </a>
  );
}
