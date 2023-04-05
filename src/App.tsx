import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { RootState } from './store/root-reducer';

const App = function () {
  const state = useSelector((state: RootState) => state);
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => console.log(state)}>Log state</button>
        <button
          onClick={() => {
            dispatch(addToCart(''));
            console.log(cart);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default App;

