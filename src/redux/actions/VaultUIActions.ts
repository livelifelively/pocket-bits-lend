export const R_CREATE_VAULT_UI_REQUEST_PENDING = '[ui] [vault] [reducer] create vault pending';
export const R_CREATE_VAULT_UI_REQUEST_SUCCESS = '[ui] [vault] [reducer] create vault success';
export const R_CREATE_VAULT_UI_REQUEST_FAILED = '[ui] [vault] [reducer] create vault failed';
export const R_CREATE_VAULT_UI_RESET = '[ui] [vault] [reducer] create vault reset';

export const resetCreateVaultUI = () => {
  return {
    type: R_CREATE_VAULT_UI_RESET,
  };
};

export const pendingCreateVaultUI = () => {
  return {
    type: R_CREATE_VAULT_UI_REQUEST_PENDING,
  };
};
