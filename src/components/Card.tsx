import type { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-zinc-800 rounded-md shadow-md w-full max-w-2xl h-full max-h-96 p-20">
        {children}
      </div>
    </div>
  );
}
