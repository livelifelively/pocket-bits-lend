export const C_GET_ACTIVE_VAULTS = '[vaults] [Command] GET ACTIVE VAULTS';
export const C_GET_VAULTS_HISTORY = '[vaults] [Command] GET VAULT HISTORY';
export const C_GET_VAULTS_RATES = '[vaults] [Command] GET VAULT RATES';
export const C_CREATE_VAULT = '[vaults] [Command] CREATE VAULT';
export const C_DELETE_VAULT = '[vaults] [Command] DELETE VAULT';

export const E_FETCH_ACTIVE_VAULTS_SUCCESS = '[vaults] [Event] Fetch active vaults success';
export const E_FETCH_VAULTS_RATES_SUCCESS = '[vaults] [Event] Fetch vault rates success';
export const E_FETCH_VAULTS_HISTORY_SUCCESS = '[vaults] [Event] Fetch vaults history success';
export const E_CREATE_VAULT_SUCCESS = '[vaults] [Event] Create vault success';
export const E_DELETE_VAULT_SUCCESS = '[vaults] [Event] Delete vault success';

export const E_FETCH_ACTIVE_VAULTS_ERROR = '[vaults] [Event] Fetch active vaults error';
export const E_FETCH_VAULTS_RATES_ERROR = '[vaults] [Event] Fetch vault rates error';
export const E_FETCH_VAULTS_HISTORY_ERROR = '[vaults] [Event] Fetch vaults history error';
export const E_CREATE_VAULT_ERROR = '[vaults] [Event] Create vault error';
export const E_DELETE_VAULT_ERROR = '[vaults] [Event] Delete vault error';

export const R_UPDATE_VAULTS_RATES = '[vaults] [Reducer] Update vaults rates';
export const R_UPDATE_ACTIVE_VAULTS = '[vaults] [Reducer] Update active vaults';
export const R_UPDATE_VAULTS_HISTORY = '[vaults] [Reducer] Update vaults history';
export const R_UPDATE_VAULT_WALLETS = '[vaults] [Event] Update vaults wallets';

export const getAllActiveVaults = () => {
  return {
    type: C_GET_ACTIVE_VAULTS,
  };
};

export const getAllVaultsRates = (coinId: string) => {
  return {
    type: C_GET_VAULTS_RATES,
    payload: {
      coinId,
    },
  };
};

export const updateVaultRates = (data: any) => {
  return {
    type: R_UPDATE_VAULTS_RATES,
    payload: data,
  };
};

export const createVault = (data: any) => {
  return {
    type: C_CREATE_VAULT,
    payload: data,
  };
};

export const updateActiveWallets = (data: any) => {
  return {
    type: R_UPDATE_VAULT_WALLETS,
    payload: data,
  };
};

export const updateActiveVaults = (data: any) => {
  return {
    type: R_UPDATE_ACTIVE_VAULTS,
    payload: data,
  };
};
