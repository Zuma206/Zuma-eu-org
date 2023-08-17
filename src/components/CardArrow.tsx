import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";

type Props = {
  id: string;
  direction: "up" | "down";
};

export default function CardArrow({ id, direction }: Props) {
  return (
    <a
      href={`#${id}`}
      className="text-3xl transition hover:scale-125 active:scale-90 opacity-75"
    >
      {direction == "up" ? <ArrowUpCircleFill /> : <ArrowDownCircleFill />}
    </a>
  );
}
