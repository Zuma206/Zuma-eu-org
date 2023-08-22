import type { Repo } from "./repo";

const url = "https://api.github.com/users/Zuma206/repos";

export async function fetchRepos() {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  const repos = await response.json();
  return repos as Repo[];
}
