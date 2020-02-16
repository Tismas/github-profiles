import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { ApiProvider } from './api/apiProvider';
import { createApiFetch } from './api/apiFetch';

const apiBaseUrl = 'https://api.github.com/';
const apiFetch = createApiFetch(apiBaseUrl);

render(
  <ApiProvider apiFetch={apiFetch}>
    <App />
  </ApiProvider>,
  document.getElementById('root'),
);
