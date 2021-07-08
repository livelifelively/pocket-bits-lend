export const C_GET_ALL_WALLETS = '[wallets] [Command] GET ALL';
export const C_GET_WALLET_ADDRESS = '[wallets] [Command] Get Wallet Address';

export const E_FETCH_WALLETS_SUCCESS = '[wallets] [Event] Fetch wallets success';
export const E_FETCH_WALLETS_ERROR = '[wallets] [Event] Fetch wallets Error';
export const E_FETCH_WALLET_ADDRESS_SUCCESS = '[wallets] [Event] Fetch wallet address Success';
export const E_FETCH_WALLET_ADDRESS_ERROR = '[wallets] [Event] Fetch wallet address Error';

export const R_UPDATE_WALLETS = '[wallets] [Reducer] Update Wallets';
export const R_UPDATE_WALLET_ADDRESS = '[wallets] [Reducer] Update Wallet address';

export const getAllWallets = () => {
  return {
    type: C_GET_ALL_WALLETS,
  };
};

export const getWalletAddress = (coinId: string) => {
  return {
    type: C_GET_WALLET_ADDRESS,
    payload: coinId,
  };
};

export const updateWallets = (data: any) => {
  return {
    type: R_UPDATE_WALLETS,
    payload: data,
  };
};

export const updateWalletAddress = (data: any) => {
  return {
    type: R_UPDATE_WALLET_ADDRESS,
    payload: data,
  };
};
