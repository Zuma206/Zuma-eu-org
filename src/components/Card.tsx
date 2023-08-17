import type { PropsWithChildren } from "react";
import CardArrow from "./CardArrow";

type Props = PropsWithChildren & {
  id?: string;
  nextId?: string;
  previousId?: string;
};

export default function Card({ children, id, previousId, nextId }: Props) {
  return (
    <div
      className="w-full h-screen flex flex-col justify-evenly items-center"
      id={id}
    >
      {previousId ? <CardArrow id={previousId} direction="up" /> : <div />}
      <div className="bg-zinc-800 rounded-md shadow-md w-full max-w-2xl h-full max-h-96 p-20 flex flex-col gap-1 justify-center">
        {children}
      </div>
      {nextId ? <CardArrow id={nextId} direction="down" /> : <div />}
    </div>
  );
}
