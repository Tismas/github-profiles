import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { StoreProvider } from './store/storeProvider';
import { createApiFetch } from './api/apiFetch';
import { ApiProvider } from './api/apiProvider';

import { StyleReset } from './styledCommons/reset';
import { theme } from './styledCommons/theme';
import { App } from './components/App';

const apiBaseUrl = 'https://api.github.com/';
const apiFetch = createApiFetch(apiBaseUrl);

render(
  <ThemeProvider theme={theme}>
    <StyleReset />
    <ApiProvider apiFetch={apiFetch}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ApiProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
