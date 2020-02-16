import React from 'react';

import { ApiContext } from '../api/apiProvider';
import { createUserStore, State as UserStore } from './userStore';

interface Store {
  user: UserStore;
}

export const StoreContext = React.createContext<Store>({} as Store);

export const StoreProvider: React.FunctionComponent = ({ children }) => {
  const api = React.useContext(ApiContext);

  const user = createUserStore(api);

  return <StoreContext.Provider value={{ user }}>{children}</StoreContext.Provider>;
};
