import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
    <ToggleMessage/>
    </>
  )
}

function ToggleMessage(){
const [isVisiable, setVisiable] = useState(true);

function toggle(){
  setVisiable(!isVisiable);
}

return(
  <>
  <button onClick={toggle}>
    Toggle Messsage
  </button>
  {isVisiable && <p>This Message is conditionally rendered</p>}
  </>
)
}

export default App
