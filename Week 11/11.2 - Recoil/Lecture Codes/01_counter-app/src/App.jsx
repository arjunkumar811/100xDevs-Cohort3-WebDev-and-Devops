import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <Increament setCount={setCount} />
      <Decrease setCount={setCount} />
    </div>
  );
}

function Decrease({ setCount }) {
  
  const decrease = () => {
    setCount(c => c - 1); // Corrected logic to decrement the count
  };

  return (
    <button onClick={decrease}>Decrease</button>
  );
}

function Increament({ setCount }) {

  const increase = () => {
    setCount(c => c + 1); // Corrected logic to increment the count
  };

  return (
    <button onClick={increase}>Increase</button>
  );
}

export default App;
