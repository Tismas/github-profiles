import React from 'react';

import { ApiFetch } from './apiFetch';
import { createUserRequests } from './users';

interface Props {
  apiFetch: ApiFetch;
}
interface ContextValue {
  apiFetch: ApiFetch;
  users: ReturnType<typeof createUserRequests>;
}

export const ApiContext = React.createContext<ContextValue>({} as ContextValue);
export const ApiProvider: React.FunctionComponent<Props> = ({ apiFetch, children }) => {
  return (
    <ApiContext.Provider value={{ apiFetch, users: createUserRequests(apiFetch) }}>
      {children}
    </ApiContext.Provider>
  );
};
