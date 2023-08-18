import type { PropsWithChildren } from "react";

export default function ContactType({ children }: PropsWithChildren) {
  return <span className="text-md opacity-50">{children}</span>;
}
