import data from "./data";
import type { Repo } from "./repo";

export async function fetchRepos() {
  // const response = await fetch("https://api.github.com/users/Zuma206/repos");
  // const repos = await response.json();
  return data as Repo[];
}
