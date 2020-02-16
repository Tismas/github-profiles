import React from 'react';
import styled from 'styled-components';

import { StoreContext } from '../../store/storeProvider';
import { LocalizationContext } from '../../localization/localizationProvider';
import { Info, Error, Loader } from '../commons';

import { RepoTeaser } from './RepoTeaser';

export const Profile: React.FunctionComponent = () => {
  const labels = React.useContext(LocalizationContext);

  const {
    user: { loading, error, profile },
  } = React.useContext(StoreContext);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  if (!profile) {
    return <Info>{labels.NOT_FOUND}</Info>;
  }

  return (
    <Wrapper>
      <Column>
        <Avatar alt="github-avatar" src={profile.avatar} />
        <Username href={profile.url}>{profile.username}</Username>
      </Column>
      <Column>
        <Description>{profile.description}</Description>
        <PopularRepos>
          {profile.popularRepos.map((repo) => (
            <RepoTeaser key={repo.name} repo={repo} />
          ))}
        </PopularRepos>
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: ${(p) => p.theme.spacing.m};
`;
const Avatar = styled.img`
  border-radius: 100%;
  width: 100%;
  max-width: 60vh;
  max-height: 60vh;
`;
const Column = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Username = styled.a`
  font-size: ${(p) => p.theme.fontSize.xxl};
`;
const Description = styled.div`
  font-size: ${(p) => p.theme.fontSize.xl};
  margin-bottom: ${(p) => p.theme.spacing.xl};
  text-align: center;
`;
const PopularRepos = styled.div`
  flex: 1;
`;
