import React from 'react';
import styled from 'styled-components';

export const Profile: React.FunctionComponent = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  color: ${(p) => p.theme.colors.primary};
  border: 3px solid ${(p) => p.theme.colors.primary};
  background-color: ${(p) => p.theme.colors.gray100};
  padding: ${(p) => p.theme.spacing.m};
  font-size: ${(p) => p.theme.fontSize.l};
`;
