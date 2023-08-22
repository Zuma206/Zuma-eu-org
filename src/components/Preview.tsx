import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  slug?: string;
};

export default function Preview({ children, slug }: Props) {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        location.href = `/article/${slug}`;
      }}
      className="max-w-md bg-zinc-900 p-5 rounded-lg shadow-md cursor-pointer hover:opacity-75 transition max-h-52 relative overflow-hidden before:absolute before:bg-gradient-to-b before:from-transparent before:to-zinc-900 before:w-full before:h-14 before:left-0 before:bottom-0"
    >
      {children}
    </div>
  );
}
