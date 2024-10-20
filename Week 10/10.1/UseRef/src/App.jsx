import { useState, useRef, useEffect } from 'react'
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

// Scroll to the bottom whenever a new message is added
useEffect(() => {
chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
}, [messages]);




return (
  <div>
  <div 
    ref={chatBoxRef} 
    style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
  >
    {messages.map((msg, index) => (
      <div key={index}>{msg}</div>
    ))}
  </div>
  <button onClick={addMessage}>Add Message</button>
</div>
);
}



function Apps() {
  return (
    <div>
      <FocusInput/ >
    </div>
  )
}

export default Apps
