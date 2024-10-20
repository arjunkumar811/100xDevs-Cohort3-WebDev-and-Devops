import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function FocusInput() {
//   // Step 1: Create a ref to store the input element
//   const inputRef = useRef(null);

//   // Step 2: Define the function to focus the input
//   const handleFocus = () => {
//   // Access the DOM node and call the focus method
//   inputRef.current.focus();
//   };



//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder='Click Me' />
//       <button onClick={handleFocus}>Focus the input</button>
//     </div>
//   )
// }


function Chat() {
  const [messages, setMessages] = useState(["Hello!, "How are you?]);
  const chatBoxRef = useRef(null);

// function to simulate adding new messages
const addMessages = () => {
  setMessages((prevMessages) => [...prevMessages, "New message!"]);
};

}









function Apps() {
  return (
    <div>
      <FocusInput/ >
    </div>
  )
}

export default Apps
