import { useState } from "react";
import styles from "./Copyable.module.css";

type Props = {
  text: string;
  email?: boolean;
};

export default function Copyable({ text, email }: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (copied) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <span className="group translate-x-5">
      <a
        href={email ? `mailto:${text}` : undefined}
        onClick={email ? undefined : handleCopy}
        className="cursor-pointer hover:opacity-80 transition"
      >
        {text}
      </a>
      {!email && (
        <span
          className={
            "bg-zinc-900 text-sm rounded-full px-2 py-1 opacity-0 absolute translate-x-2 hidden transition group-hover:inline " +
            styles.fadeIn
          }
        >
          {copied ? "Copied!" : "Copy"}
        </span>
      )}
    </span>
  );
}
