import { CartState, ProductState } from './types';

export const PRODUCTS_INITIAL_STATE: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};
