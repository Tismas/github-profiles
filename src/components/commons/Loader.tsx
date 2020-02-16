import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin: ${(p) => p.theme.spacing.l} auto;
  width: 10vw;
  height: 10vw;
  min-width: 40px;
  min-height: 40px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 100%;
  border-top: 3px solid ${(p) => p.theme.colors.info};
  border-left: 3px solid transparent;
  border-bottom: 3px solid ${(p) => p.theme.colors.info};
  border-right: 3px solid transparent;
  animation: 1s ${animation} infinite;
  grid-column: 1 / end;
`;
