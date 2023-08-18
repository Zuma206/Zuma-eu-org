export type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  license: {
    name: string;
  };
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
