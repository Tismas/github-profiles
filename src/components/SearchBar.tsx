import React from 'react';
import styled from 'styled-components';

import { LocalizationContext } from '../localization/localizationProvider';
import { StoreContext } from '../store/storeProvider';

export const SearchBar: React.FunctionComponent = () => {
  const labels = React.useContext(LocalizationContext);
  const {
    user: { fetchProfile },
  } = React.useContext(StoreContext);

  const fetchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchProfile(e.currentTarget.value);
    }
  };

  return <Search onKeyDown={fetchOnEnter} placeholder={labels.INPUT_PLACEHOLDER} />;
};

const Search = styled.input`
  font-size: ${(p) => p.theme.fontSize.m};
  padding: ${(p) => p.theme.spacing.m};
  width: 90%;
  border: 3px solid ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.primary};
  background-color: ${(p) => p.theme.colors.gray100};
  outline: none;
`;
