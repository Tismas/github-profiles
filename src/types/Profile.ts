import { Repo } from './Repo';

export interface Profile {
  username: string;
  description: string;
  avatar: string;
  popularRepos: ReadonlyArray<Repo>;
}
