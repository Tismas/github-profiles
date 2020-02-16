import { Repo } from './Repo';

export interface Profile {
  username: string;
  description: string;
  avatar: string;
  url: string;
  popularRepos: ReadonlyArray<Repo>;
}
