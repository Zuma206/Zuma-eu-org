import type { Repo } from "@lib/repo";
import type { PropsWithChildren } from "react";
import { Github, StarFill, BinocularsFill } from "react-bootstrap-icons";

type Props = {
  repo: Repo;
};

export default function Repository({ repo }: Props) {
  return (
    <a
      href={repo.html_url}
      className="bg-zinc-900 block rounded-md shadow-md p-2 hover:opacity-75 transition active:scale-90"
    >
      <h1 className="text-xl flex items-center gap-2">
        <Github /> {repo.full_name}
      </h1>
      <div className="flex gap-3">
        <Statistic>
          <StarFill /> {repo.stargazers_count}
        </Statistic>
        <Statistic>
          <BinocularsFill /> {repo.watchers_count}
        </Statistic>
      </div>
    </a>
  );
}

function Statistic({ children }: PropsWithChildren) {
  return <span className="flex items-center gap-1">{children}</span>;
}
