import React from 'react';

export const WalletContext = React.createContext<Record<string, unknown>>({});

// interface WalletProviderProps {}

export const WalletProvider: React.FC = ({ children }) => {
  return <WalletContext.Provider value={{}}>{children}</WalletContext.Provider>;
};
