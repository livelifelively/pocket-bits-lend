import React from "react";

export const HomeContext = React.createContext<{}>({});

interface HomeProviderProps {}

export const WalletProvider: React.FC<HomeProviderProps> = ({ children }) => {
  return (
    <HomeContext.Provider value={{}}>
      {children}
    </HomeContext.Provider>
  );
};
