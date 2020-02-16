import React from 'react';
import { Labels, labels } from './localization';

export const LocalizationContext = React.createContext<Labels>(labels);
export const LocalizationProvider: React.FunctionComponent = ({ children }) => {
  return <LocalizationContext.Provider value={labels}>{children}</LocalizationContext.Provider>;
};
