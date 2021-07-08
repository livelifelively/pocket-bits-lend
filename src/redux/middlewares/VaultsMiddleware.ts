import { vaultsInterestRates } from '../../api/vault/requests';
import {
  C_GET_VAULTS_RATES,
  E_FETCH_VAULTS_RATES_ERROR,
  E_FETCH_VAULTS_RATES_SUCCESS,
  updateVaultRates,
} from '../actions/VaultActions';
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

export const vaultMiddlwares = [getVaultRatesFlow, processVaultRates];
