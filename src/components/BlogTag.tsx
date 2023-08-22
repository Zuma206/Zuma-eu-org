import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href?: string;
};

export default function BlogTag({ children, href }: Props) {
  return (
    <a
      href={href}
      className={`outline outline-gray-200 outline-1 text-sm rounded-full max-w-fit px-2 py-1 no-underline ${
        href ? "hover:opacity-75" : ""
      } transition`}
    >
      {children}
    </a>
  );
}
