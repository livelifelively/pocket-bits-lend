import React from "react";

export const RewardsContext = React.createContext<{}>({});

interface RewardsProviderProps {}

export const WalletProvider: React.FC<RewardsProviderProps> = ({ children }) => {
  return (
    <RewardsContext.Provider value={{}}>
      {children}
    </RewardsContext.Provider>
  );
};
