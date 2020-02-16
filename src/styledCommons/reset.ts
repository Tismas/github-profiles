import { createGlobalStyle } from 'styled-components';

export const StyleReset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: monospace;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;  
  }
`;
