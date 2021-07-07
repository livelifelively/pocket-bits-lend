import { R_UPDATE_WALLETS } from '../actions/WalletsActions';

const walletsReducer = (wallets: any[] = [], action: ReduxAction) => {
  switch (action.type) {
    case R_UPDATE_WALLETS:
      return action.payload;
    default:
      return wallets;
  }
};

export default walletsReducer;
