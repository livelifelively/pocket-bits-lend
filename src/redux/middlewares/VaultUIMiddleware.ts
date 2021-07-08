import { R_CREATE_VAULT_UI_REQUEST_FAILED, R_CREATE_VAULT_UI_REQUEST_SUCCESS } from '../actions/VaultUIActions';

import { E_CREATE_VAULT_SUCCESS, E_CREATE_VAULT_ERROR } from '../actions/VaultActions';

export const vaultUIMiddleware = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: any) => {
  switch (action.type) {
    case E_CREATE_VAULT_SUCCESS:
      dispatch({ type: R_CREATE_VAULT_UI_REQUEST_SUCCESS });
      break;

    case E_CREATE_VAULT_ERROR:
      dispatch({ type: R_CREATE_VAULT_UI_REQUEST_FAILED });
      break;
  }

  return next(action);
};
