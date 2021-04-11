import React from "react";

export const WalletContext = React.createContext<{}>({});

interface WalletProviderProps {}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  return (
    <WalletContext.Provider value={{}}>
      {children}
    </WalletContext.Provider>
  );
};
