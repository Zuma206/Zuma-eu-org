import type { ReactNode } from "react";
import styles from "./Social.module.css";

type Props = {
  children?: ReactNode;
  backgroundColor?: string;
  tooltip?: string;
  href?: string;
};

export default function Social({
  children,
  backgroundColor,
  tooltip,
  href,
}: Props) {
  return (
    <div className="relative group flex justify-center transition active:scale-90">
      <a
        href={href}
        style={{ backgroundColor }}
        className="p-3 bg-zinc-700 rounded-full text-2xl hover:opacity-75 transition"
      >
        {children}
      </a>
      {tooltip && (
        <div
          className={
            "absolute text-sm bg-zinc-900 rounded-full px-2 py-1 top-[3.2rem] hidden opacity-0 group-hover:block " +
            styles.tooltip
          }
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}
