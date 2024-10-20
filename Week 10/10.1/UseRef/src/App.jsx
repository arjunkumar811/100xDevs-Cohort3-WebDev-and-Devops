import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FocusInput() {
  // Step 1: Create a ref to store the input element
  const inputRef = useRef(null);

  // Step 2: Define the function to focus the input
  const handleFocus = () => {
  // Access the DOM node and call the focus method
  inputRef.current.focus();
  };



  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Click Me' />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  )
}

export default App
