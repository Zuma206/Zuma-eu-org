import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  id?: string;
  nextId?: string;
  previousId?: string;
};

export default function Card({ children, id, previousId, nextId }: Props) {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      id={id}
    >
      {previousId && <a href={`#${previousId}`}>Up</a>}
      <div className="bg-zinc-800 rounded-md shadow-md w-full max-w-2xl h-full max-h-96 p-20 flex flex-col gap-1 justify-center">
        {children}
      </div>
      {nextId && <a href={`#${nextId}`}>Down</a>}
    </div>
  );
}
