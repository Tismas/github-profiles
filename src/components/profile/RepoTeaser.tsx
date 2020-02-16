import React from 'react';
import styled from 'styled-components';

import { Repo } from '../../types/Repo';

interface Props {
  repo: Repo;
}

export const RepoTeaser: React.FunctionComponent<Props> = ({ repo }) => {
  return (
    <Wrapper href={repo.url}>
      <Row>
        <Name>{repo.name}</Name>
        <Stars>{repo.stars}</Stars>
      </Row>
      <Desc>{repo.description}</Desc>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.colors.gray400};
  background: ${(p) => p.theme.colors.gray300};
  display: flex;
  flex-direction: column;
  margin-bottom: ${(p) => p.theme.spacing.s};
  padding: ${(p) => p.theme.spacing.s};
  &:hover {
    background: ${(p) => p.theme.colors.gray400};
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  font-size: ${(p) => p.theme.fontSize.l};
`;
const Stars = styled.div`
  &::before {
    content: '★';
    color: ${(p) => p.theme.colors.secondary};
    margin-right: ${(p) => p.theme.spacing.xs};
  }
`;
const Desc = styled.div`
  margin-top: ${(p) => p.theme.spacing.m};
`;
