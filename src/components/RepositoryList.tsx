import type { Repo } from "@lib/repo";
import Repository from "./Repository";
import { useEffect, useState } from "react";
import { fetchRepos } from "@lib/index";

type Props = {
  defaultRepos: Repo[];
};

export default function RepositoryList({ defaultRepos }: Props) {
  const [repos, setRepos] = useState(defaultRepos);

  useEffect(() => {
    fetchRepos().then(setRepos);
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-4 max-h-96 overflow-y-scroll">
      {repos.map((repo) => (
        <Repository key={repo.full_name} repo={repo} />
      ))}
    </div>
  );
}
