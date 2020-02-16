import React from 'react';

import { ApiFetch } from './apiFetch';
import { createUserRequests } from './users';

interface Props {
  apiFetch: ApiFetch;
}
export interface API {
  apiFetch: ApiFetch;
  users: ReturnType<typeof createUserRequests>;
}

export const ApiContext = React.createContext<API>({} as API);
export const ApiProvider: React.FunctionComponent<Props> = ({ apiFetch, children }) => {
  return (
    <ApiContext.Provider value={{ apiFetch, users: createUserRequests(apiFetch) }}>
      {children}
    </ApiContext.Provider>
  );
};
