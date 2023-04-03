import { createSlice } from '@reduxjs/toolkit';
// import { PRODUCTS_INITIAL_STATE } from '../../model/initialState';

// export const productsSlice = createSlice({
//   name: 'products',
//   initialState: PRODUCTS_INITIAL_STATE,
//   reducers: {},
// });

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => ({ ...state, value: state.value + 1 }),
  },
});

export const { increment } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
