export const GET_ALL_WALLETS = '[wallets] GET ALL';
export const FETCH_WALLETS_SUCCESS = '[wallets] Fetch success';
export const FETCH_WALLETS_ERROR = '[wallets] Fetch Error';

export const getAllWallets = () => {
  return {
    type: GET_ALL_WALLETS,
  };
};
