import { useState } from 'react'

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter() {
// Create a state variable called count and a function to update it called setCount 
const [count, setCount] = useState(0);  




function incresecount() {
  setCount(count + 1);
}

function decreasecount() {
  setCount(count - 1);
}

function reset() {
  setCount(0);
}

return (
<>
<h1></h1>
<button onClick={ incresecount } >Increase Count</button>
<button onClick={ decreasecount } >Decrease Count</button>
<button onClick={ reset } >Reset Count</button>
</>

)
}

export default App
