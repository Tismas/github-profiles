import React from 'react';
import { ApiProvider } from '../src/api/apiProvider';
import { StoreProvider } from '../src/store/storeProvider';
import { LocalizationProvider } from '../src/localization/localizationProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styledCommons/theme';

interface Props {
  fetchMock: any;
}

export const TestProvider: React.FunctionComponent<Props> = ({ fetchMock, children }) => {
  return (
    <ApiProvider apiFetch={fetchMock}>
      <StoreProvider>
        <LocalizationProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </LocalizationProvider>
      </StoreProvider>
    </ApiProvider>
  );
};
