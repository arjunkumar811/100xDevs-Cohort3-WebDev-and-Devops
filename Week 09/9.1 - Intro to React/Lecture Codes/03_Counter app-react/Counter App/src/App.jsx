import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0);


function onClickHeadler() {
setCount(count + 1);
}


  return (
    <>
    <h1>Counter App</h1>
     <button onClick={onClickHeadler}> 

     Counter {count}
     </button>
    </>
  );
}

export default App
