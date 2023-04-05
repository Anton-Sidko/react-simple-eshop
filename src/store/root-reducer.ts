import { combineReducers } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
