import { ApiFetch } from './apiFetch';

export const createUserRequests = (apiFetch: ApiFetch) => ({
  getUserData: (username: string) => {
    return apiFetch(`users/${username}`);
  },
  getUserRepos: (username: string) => {
    return apiFetch(`users/${username}/repos`);
  },
});
