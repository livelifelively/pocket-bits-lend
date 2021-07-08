import { compose, combineReducers, createStore, applyMiddleware } from 'redux';

import wallets from './reducers/WalletsReducer';
import vaults from './reducers/VaultsReducer';
import vaultsUI from './reducers/VaultUIReducer';

import { walletMiddlwares } from './middlewares/WalletsMiddleware';
import { vaultMiddlwares } from './middlewares/VaultsMiddleware';
import { apiMiddleware } from './middlewares/APIRequestMiddleware';
import { vaultUIMiddleware } from './middlewares/VaultUIMiddleware';

const rootReducer = combineReducers({
  wallets,
  vaults,
  vaultsUI,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...walletMiddlwares, apiMiddleware, ...vaultMiddlwares, vaultUIMiddleware))
);

export default store;
