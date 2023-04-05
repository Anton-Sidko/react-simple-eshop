export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
}

// export interface State {

// }
