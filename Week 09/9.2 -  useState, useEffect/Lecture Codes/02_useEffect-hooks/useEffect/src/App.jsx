import { useState, useEffect } from 'react'


function App() {
  return (
    <>
<Counter/>
    </>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
useEffect(() => {
setInterval(() => {
setCount((count) => count + 1);
}, 5000);
}, []);


  return(
    <>
    <h1> {count} </h1>
    </>
  )
}

export default App
