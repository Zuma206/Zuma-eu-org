import type { PropsWithChildren } from "react";

export default function CoolText({ children }: PropsWithChildren) {
  return (
    <span className="bg-gradient-to-br from-blue-600 to-pink-600 text-transparent bg-clip-text font-black">
      {children}
    </span>
  );
}
