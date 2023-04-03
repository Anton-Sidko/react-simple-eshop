import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/products/productsSlice';

const App = function () {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
    </div>
  );
};

export default App;

