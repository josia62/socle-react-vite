import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { combinedReducer } from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation'],
};

const pReducer = persistReducer(persistConfig, combinedReducer);

export const store: any = createStore(
  pReducer,
  compose(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export default store;
