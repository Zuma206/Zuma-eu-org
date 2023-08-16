import type { PropsWithChildren } from "react";
import background from "@assets/bg.svg";

export default function Background({ children }: PropsWithChildren) {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </section>
  );
}
