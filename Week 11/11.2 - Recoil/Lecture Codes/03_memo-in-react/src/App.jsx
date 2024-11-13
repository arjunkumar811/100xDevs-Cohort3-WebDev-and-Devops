import { useEffect, useState, memo } from 'react';

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  // Start interval to increment count every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Increment and decrement functions
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <CurrentCount count={count} />
      <Increament increment={increment} />
      <Decrease decrement={decrement} />
    </div>
  );
}

const CurrentCount = memo(function ({ count }) {
  return <div>{count}</div>;
});

const Increament = memo(function ({ increment }) {
  return (
    <div>
      <button onClick={increment}>Increase</button>
    </div>
  );
});

const Decrease = memo(function ({ decrement }) {
  return (
    <div>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
});

export default App;
