import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function useCounter() {
const [count , setCount] = useState(0);

function increase() {
  setCount(count + 1);
}

return { count, increase }
}

function App() {
 
  return (
    <>
      <Counter />
    
    </>
  )
}

function Counter() {
 const {count, increase} = useCounter();


  return <div>
    {count}
    <button onClick={increase}>increase</button>
  </div>
}

export default App
