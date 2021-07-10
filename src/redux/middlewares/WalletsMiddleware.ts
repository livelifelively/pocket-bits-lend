import { walletsAllGet, walletAddressGet } from '../../api/wallet/requests';
import {
  C_GET_ALL_WALLETS,
  C_GET_WALLET_ADDRESS,
  E_FETCH_WALLETS_SUCCESS,
  E_FETCH_WALLETS_ERROR,
  E_FETCH_WALLET_ADDRESS_ERROR,
  E_FETCH_WALLET_ADDRESS_SUCCESS,
  updateWallets,
  updateWalletAddress,
} from '../actions/WalletsActions';
import { apiRequest } from '../actions/APIRequestActions';
import { updateActiveWallets } from '../actions/VaultActions';

export const getAllWalletsFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  if (action.type === C_GET_ALL_WALLETS) {
    dispatch(apiRequest(walletsAllGet, {}, E_FETCH_WALLETS_SUCCESS, E_FETCH_WALLETS_ERROR));

    // set component loading true
    // reset component state? or only error state?
  }
  return next(action);
};

export const getWalletAddressFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  if (action.type === C_GET_WALLET_ADDRESS) {
    dispatch(
      apiRequest(
        walletAddressGet,
        { coinId: action.payload },
        E_FETCH_WALLET_ADDRESS_SUCCESS,
        E_FETCH_WALLET_ADDRESS_ERROR
      )
    );
  }

  return next(action);
};

export const processWalletAddress = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  next(action);

  if (action.type === E_FETCH_WALLET_ADDRESS_SUCCESS) {
    dispatch(updateWalletAddress(action.payload));
  }
};

export const processWalletCollection = ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: ReduxAction
) => {
  next(action);

  if (action.type === E_FETCH_WALLETS_SUCCESS) {
    dispatch(updateWallets(action.payload));
    const activeWallets = action.payload.map((val) => {
      return {
        coinId: val.id,
      };
    });
    dispatch(updateActiveWallets(activeWallets));
  }
};

export const walletMiddlwares = [
  getAllWalletsFlow,
  processWalletCollection,
  getWalletAddressFlow,
  processWalletAddress,
];
