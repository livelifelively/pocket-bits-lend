import { compose, combineReducers, createStore, applyMiddleware } from 'redux';

import wallets from './reducers/WalletsReducer';
import vaults from './reducers/VaultsReducer';

import { walletMiddlwares } from './middlewares/WalletsMiddleware';
import { vaultMiddlwares } from './middlewares/VaultsMiddleware';
import { apiMiddleware } from './middlewares/APIRequestMiddleware';

const rootReducer = combineReducers({
  wallets,
  vaults,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...walletMiddlwares, apiMiddleware, ...vaultMiddlwares))
);

export default store;
