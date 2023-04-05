import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS_INITIAL_STATE } from '../model/initialState';

export const productsSlice = createSlice({
  name: 'products',
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {},
});

export default productsSlice.reducer;
