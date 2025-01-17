import { ReactNode } from "react";

export type ContextProps = {
  children: ReactNode;
};

export type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type Repo = {
  id: number;
  language: string;
  name: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;
};
