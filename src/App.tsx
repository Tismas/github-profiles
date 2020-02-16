import React from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';
import { Profile } from './Profile';

export const App: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Profile />
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
