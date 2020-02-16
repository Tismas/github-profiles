import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './styledCommons/theme';
import { createApiFetch } from './api/apiFetch';
import { ApiProvider } from './api/apiProvider';
import { App } from './App';
import { StyleReset } from './styledCommons/reset';

const apiBaseUrl = 'https://api.github.com/';
const apiFetch = createApiFetch(apiBaseUrl);

render(
  <ThemeProvider theme={theme}>
    <StyleReset />
    <ApiProvider apiFetch={apiFetch}>
      <App />
    </ApiProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
