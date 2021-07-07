import { walletsAllGet } from '../../api/wallet/requests';
import { GET_ALL_WALLETS } from '../actions/WalletsActions';

export const getNewsFlow = ({ dispatch }: { dispatch: any }) => (next: any) => (action: ReduxAction) => {
  if (action.type === GET_ALL_WALLETS) {
    // walletsAllGet();
  }
  return next(action);
};

export const walletMiddlwares = [getNewsFlow];
