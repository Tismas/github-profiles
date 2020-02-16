import React from 'react';
import styled from 'styled-components';

export const SearchBar: React.FunctionComponent = () => {
  return <Search placeholder="Provide username and hit enter" />;
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
