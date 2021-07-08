import {
  R_CREATE_VAULT_UI_REQUEST_FAILED,
  R_CREATE_VAULT_UI_REQUEST_PENDING,
  R_CREATE_VAULT_UI_REQUEST_SUCCESS,
  R_CREATE_VAULT_UI_RESET,
} from '../actions/VaultUIActions';

const initialState = {
  createVault: {},
  activeVaults: {},
};

const VaultUIReducer = (state: any = initialState, action: ReduxAction) => {
  switch (action.type) {
    case R_CREATE_VAULT_UI_REQUEST_PENDING:
      return {
        ...state,
        createVault: {
          loading: true,
          status: 'PENDING',
        },
      };
    case R_CREATE_VAULT_UI_REQUEST_FAILED:
      return {
        ...state,
        createVault: {
          loading: false,
          status: 'FAILED',
        },
      };
    case R_CREATE_VAULT_UI_REQUEST_SUCCESS:
      return {
        ...state,
        createVault: {
          loading: false,
          status: 'SUCCESS',
        },
      };
    case R_CREATE_VAULT_UI_RESET:
      return {
        ...state,
        createVault: {},
      };
    default:
      return state;
  }
};

export default VaultUIReducer;
