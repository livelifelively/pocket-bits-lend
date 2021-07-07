export const C_GET_ALL_WALLETS = '[wallets] [Command] GET ALL';
export const E_FETCH_WALLETS_SUCCESS = '[wallets] [Event] Fetch success';
export const E_FETCH_WALLETS_ERROR = '[wallets] [Event] Fetch Error';
export const R_UPDATE_WALLETS = '[wallets] [Reducer] Update Wallets';

export const getAllWallets = () => {
  return {
    type: C_GET_ALL_WALLETS,
  };
};

export const updateWallets = (data: any) => {
  return {
    type: R_UPDATE_WALLETS,
    payload: data,
  };
};
