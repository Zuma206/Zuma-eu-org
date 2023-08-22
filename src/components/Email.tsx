import { useState } from "react";
import Copyable from "./Copyable";

type Props = {
  email: string;
};

export default function Email({ email }: Props) {
  const [display, setDisplay] = useState(false);

  if (display) {
    return <Copyable text={email} email />;
  }

  return (
    <button
      className="cursor-pointer hover:opacity-80 transition"
      onClick={() => setDisplay(true)}
    >
      Reveal Email
    </button>
  );
}
