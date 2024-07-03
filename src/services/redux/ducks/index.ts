import { combineReducers } from 'redux';
import { authReducer as auth } from './auth';

export const combinedReducer = combineReducers({
  auth,
});
