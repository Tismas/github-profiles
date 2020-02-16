import React from 'react';

import { Repo } from '../types/Repo';
import { Profile } from '../types/Profile';
import { API } from '../api/apiProvider';

export interface State {
  loading: boolean;
  profile?: Profile | null;
  error?: string | null;
  fetchProfile(username: string): void;
}

const initialState = {
  loading: false,
} as State;

export const createUserStore = (api: API): State => {
  const [state, setState] = React.useState(initialState);

  const fetchProfile = async (username: string) => {
    setState({ ...state, loading: true });
    const [
      { data: profileData, error: profileError },
      { data: reposData, error: reposError },
    ] = await Promise.all([api.users.getUserData(username), api.users.getUserRepos(username)]);

    const error = profileError || reposError;
    if (error) {
      setState({ ...state, loading: false, profile: null, error });
      return;
    }

    const popularRepos = getPopularRepos(reposData);
    const profile = getProfile(profileData, popularRepos);

    setState({ ...state, loading: false, profile, error: null });
  };

  return { ...state, fetchProfile };
};

const getPopularRepos = (reposData: any): Array<Repo> => {
  return reposData
    .map(
      (repoData: any): Repo => ({
        stars: repoData.watchers as number,
        name: repoData.name as string,
        description: repoData.description as string,
      }),
    )
    .sort((r1: Repo, r2: Repo) => r1.stars - r2.stars)
    .slice(0, 3);
};

const getProfile = (profileData: any, popularRepos: Array<Repo>): Profile => ({
  username: profileData.login,
  avatar: profileData.avatar_url,
  description: profileData.bio,
  popularRepos: popularRepos,
});
