import './App.css';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './components/counter';

function App() {
  // const [count, setCount] = useState(0)
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      {/* <button onClick={() => dispatch(incrementByAmount(1))}>increment by 1</button>
      <button onClick={() => dispatch(incrementByAmount(-1))}>decrement by 1</button> */}
      <button onClick={() => dispatch(incrementByAmount(20))}>decrement by 20</button>
    </div>
  );
}

export default App;
