import { compose, combineReducers, createStore, applyMiddleware } from 'redux';

import wallets from './reducers/WalletsReducer';
import { walletMiddlwares } from './middlewares/WalletsMiddleware';

const rootReducer = combineReducers({
  wallets,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, compose(applyMiddleware(...walletMiddlwares)));

export default store;
