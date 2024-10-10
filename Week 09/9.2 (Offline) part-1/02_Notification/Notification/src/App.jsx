import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
 

  function icresecount() {
   setCount(count + 1);
  }

  return (
    <>
    <div style={{background: "red", borderRadius: 20, width:20 , height: 25, paddingLeft: 10, paddingTop: 5 }}>
      {count}
    </div>
     <img src="https://www.seekpng.com/png/detail/130-1304578_notification-comments-notification-icon-svg.png" alt="" width={50}/>
     <button onClick={icresecount}> Increse </button>
    </>
  )
}

export default App
