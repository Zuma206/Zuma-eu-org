import type { PropsWithChildren } from "react";

export default function Text({ children }: PropsWithChildren) {
  return <p className="text-xl">{children}</p>;
}
