import { createSlice } from '@reduxjs/toolkit';
import { CART_INITIAL_STATE } from '../model/initialState';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd }];
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    // addToCart(state) => {
    //   ...state,
    //   cartItems: [
    //     ...state.cartItems,
    //     {
    //       id: 1,
    //       title: 'test',
    //       price: 100,
    //       stock: 5,
    //       brand: 'test',
    //       category: 'test',
    //       thumbnail: 'test',
    //       quantity: 10,
    //     },
    //   ],
    // },
    addToCart(state, product) {
      // state.cartItems = [
      //   ...state.cartItems,
      //   {
      //     id: 1,
      //     title: 'test',
      //     price: 100,
      //     stock: 5,
      //     brand: 'test',
      //     category: 'test',
      //     thumbnail: 'test',
      //     quantity: 10,
      //   },
      // ],
      state.cartItems = addCartItem(state.cartItems, {
        id: 1,
        title: 'test',
        price: 100,
        stock: 5,
        brand: 'test',
        category: 'test',
        thumbnail: 'test',
        quantity: 1,
      });
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
// reducers: {
//   increment: (state) => ({ ...state, value: state.value + 1 }),
// },
