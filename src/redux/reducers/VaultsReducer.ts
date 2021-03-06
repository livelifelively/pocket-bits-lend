import { R_UPDATE_VAULTS_RATES, R_UPDATE_VAULT_WALLETS, R_UPDATE_ACTIVE_VAULTS } from '../actions/VaultActions';

const initialState = {
  rates: {},
  history: [],
  active: [],
  wallets: [],
};

const vaultsReducer = (state: any = initialState, action: ReduxAction) => {
  switch (action.type) {
    case R_UPDATE_VAULTS_RATES:
      return {
        ...state,
        rates: {
          ...state.rates,
          [action.payload.coinId]: action.payload.rates,
        },
      };
    case R_UPDATE_VAULT_WALLETS:
      return {
        ...state,
        wallets: action.payload,
      };

    case R_UPDATE_ACTIVE_VAULTS:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default vaultsReducer;
