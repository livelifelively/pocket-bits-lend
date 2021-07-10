import { vaultsInterestRates, createVault, vaultsAllGet, deleteVault } from '../../api/vault/requests';

import {
  C_GET_VAULTS_RATES,
  C_GET_ACTIVE_VAULTS,
  C_CREATE_VAULT,
  C_DELETE_VAULT,
  E_FETCH_VAULTS_RATES_ERROR,
  E_FETCH_VAULTS_RATES_SUCCESS,
  E_CREATE_VAULT_SUCCESS,
  E_FETCH_ACTIVE_VAULTS_SUCCESS,
  E_FETCH_ACTIVE_VAULTS_ERROR,
  E_CREATE_VAULT_ERROR,
  E_DELETE_VAULT_ERROR,
  E_DELETE_VAULT_SUCCESS,
  updateVaultRates,
  updateActiveVaults,
  getAllActiveVaults,
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

  return next(action);
};

export const processCreateVaultSuccessOrError = ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: ReduxAction
) => {
  next(action);

  if (action.type === E_CREATE_VAULT_SUCCESS) {
    dispatch({ type: R_CREATE_VAULT_UI_REQUEST_SUCCESS });
    dispatch(getAllWallets());
    dispatch(getAllActiveVaults());
  } else if (action.type === E_CREATE_VAULT_ERROR) {
    dispatch({ type: R_CREATE_VAULT_UI_REQUEST_FAILED });
  }
};

export const getAllActiveVaultsFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: ReduxAction
) => {
  if (action.type === C_GET_ACTIVE_VAULTS) {
    dispatch(apiRequest(vaultsAllGet, {}, E_FETCH_ACTIVE_VAULTS_SUCCESS, E_FETCH_ACTIVE_VAULTS_ERROR));
  }

  return next(action);
};

export const processAllActiveVaultsGetResponse = ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: ReduxAction
) => {
  next(action);

  if (action.type === E_FETCH_ACTIVE_VAULTS_SUCCESS) {
    dispatch(updateActiveVaults(action.payload));
  }
};

export const deleteVaultFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: ReduxAction) => {
  if (action.type === C_DELETE_VAULT) {
    dispatch(apiRequest(deleteVault, { id: action.payload }, E_DELETE_VAULT_SUCCESS, E_DELETE_VAULT_ERROR));
  }

  return next(action);
};

export const processDeleteVaultFlow = ({ dispatch }: { dispatch: any }) => (next: any) => async (
  action: ReduxAction
) => {
  next(action);
  if (action.type === E_DELETE_VAULT_SUCCESS) {
    // get active vaults again
    dispatch(getAllActiveVaults());
    // get all wallets again, since wallet balance changed
    dispatch(getAllWallets());
  }
};

export const vaultMiddlwares = [
  getVaultRatesFlow,
  processVaultRates,
  createVaultFlow,
  processCreateVaultSuccessOrError,
  getAllActiveVaultsFlow,
  processAllActiveVaultsGetResponse,
  deleteVaultFlow,
  processDeleteVaultFlow,
];
