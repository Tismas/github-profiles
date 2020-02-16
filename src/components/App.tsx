import React from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';
import { Profile } from './profile/Profile';

export const App: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <SearchBar />
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: ${(p) => p.theme.colors.gray200};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  width: 90%;
  height: 80%;
  color: ${(p) => p.theme.colors.primary};
  border: 3px solid ${(p) => p.theme.colors.primary};
  background-color: ${(p) => p.theme.colors.gray100};
  padding: ${(p) => p.theme.spacing.m};
  font-size: ${(p) => p.theme.fontSize.l};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
