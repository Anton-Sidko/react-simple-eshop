import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './products/productsSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
