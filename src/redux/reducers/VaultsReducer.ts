import { R_UPDATE_VAULTS_RATES } from '../actions/VaultActions';

const initialState = {
  rates: {},
  history: [],
  active: [],
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
    default:
      return state;
  }
};

export default vaultsReducer;
