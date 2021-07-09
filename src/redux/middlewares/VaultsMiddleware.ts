import { vaultsInterestRates, createVault } from '../../api/vault/requests';
import {
  C_GET_VAULTS_RATES,
  E_FETCH_VAULTS_RATES_ERROR,
  E_FETCH_VAULTS_RATES_SUCCESS,
  C_CREATE_VAULT,
  E_CREATE_VAULT_SUCCESS,
  updateVaultRates,
  E_CREATE_VAULT_ERROR,
} from '../actions/VaultActions';
import {
  pendingCreateVaultUI,
  R_CREATE_VAULT_UI_REQUEST_SUCCESS,
  R_CREATE_VAULT_UI_REQUEST_FAILED,
} from '../actions/VaultUIActions';
import { getAllWallets } from '../actions/WalletsActions';
import { apiRequest } from '../actions/APIRequestActions';

export const getVaultRatesFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  if (action.type === C_GET_VAULTS_RATES) {
    dispatch(
      apiRequest(
        vaultsInterestRates,
        { coinId: action.payload.coinId },
        E_FETCH_VAULTS_RATES_SUCCESS,
        E_FETCH_VAULTS_RATES_ERROR
      )
    );
  }

  return next(action);
};

export const processVaultRates = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  next(action);

  if (action.type === E_FETCH_VAULTS_RATES_SUCCESS) {
    dispatch(updateVaultRates(action.payload));
    // stop spinner, reset error states
  }
};

export const createVaultFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  if (action.type === C_CREATE_VAULT) {
    dispatch(apiRequest(createVault, action.payload, E_CREATE_VAULT_SUCCESS, E_CREATE_VAULT_ERROR));
    dispatch(pendingCreateVaultUI());
  }

  next(action);
};

export const processCreateVaultSuccessOrError = ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: ReduxAction
) => {
  next(action);

  if (action.type === E_CREATE_VAULT_SUCCESS) {
    dispatch({ type: R_CREATE_VAULT_UI_REQUEST_SUCCESS });
    dispatch(getAllWallets());
    // #TODO update active wallets
  } else if (action.type === E_CREATE_VAULT_ERROR) {
    dispatch({ type: R_CREATE_VAULT_UI_REQUEST_FAILED });
  }

  // dispatch()
  // stop loading. let the create vault screen navigate to success screen.
};

export const vaultMiddlwares = [
  getVaultRatesFlow,
  processVaultRates,
  createVaultFlow,
  processCreateVaultSuccessOrError,
];
