import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0);

function incresecount() {
  setCount(count => count + 1);
}

useEffect(function() {
  setInterval(incresecount, 1000);
}, [])


  return (
    <>
      {count}
    </>
  )
}

export default App
