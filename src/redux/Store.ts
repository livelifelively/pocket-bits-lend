import { compose, combineReducers, createStore, applyMiddleware } from 'redux';

import wallets from './reducers/Wallets';
import { walletMiddlwares } from './middlewares/Wallets';

const rootReducer = combineReducers({
  wallets,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, compose(applyMiddleware(...walletMiddlwares)));

export default store;
