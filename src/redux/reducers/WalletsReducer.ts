import { R_UPDATE_WALLETS, R_UPDATE_WALLET_ADDRESS } from '../actions/WalletsActions';

const initialState = {
  balance: [],
  address: {},
};

const walletsReducer = (state: any = initialState, action: ReduxAction) => {
  switch (action.type) {
    case R_UPDATE_WALLETS:
      return {
        ...state,
        balance: action.payload,
      };
    case R_UPDATE_WALLET_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          [action.payload.coinId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default walletsReducer;
