import { walletsAllGet } from '../../api/wallet/requests';
import {
  C_GET_ALL_WALLETS,
  E_FETCH_WALLETS_SUCCESS,
  E_FETCH_WALLETS_ERROR,
  updateWallets,
} from '../actions/WalletsActions';
import { apiRequest } from '../actions/APIRequestActions';

export const getAllWalletsFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  if (action.type === C_GET_ALL_WALLETS) {
    dispatch(apiRequest(walletsAllGet, {}, E_FETCH_WALLETS_SUCCESS, E_FETCH_WALLETS_ERROR));

    // set component loading true
    // reset component state? or only error state?
  }
  return next(action);
};

export const processWalletCollection = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === E_FETCH_WALLETS_SUCCESS) {
    console.log('E_FETCH_WALLETS_SUCCESS', action.payload);
    dispatch(updateWallets(action.payload));
  }
};

export const walletMiddlwares = [getAllWalletsFlow, processWalletCollection];
