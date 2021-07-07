import { compose, combineReducers, createStore, applyMiddleware } from 'redux';

import wallets from './reducers/WalletsReducer';
import { walletMiddlwares } from './middlewares/WalletsMiddleware';
import { apiMiddleware } from './middlewares/APIRequestMiddleware';

const rootReducer = combineReducers({
  wallets,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, compose(applyMiddleware(...walletMiddlwares, apiMiddleware)));

export default store;
