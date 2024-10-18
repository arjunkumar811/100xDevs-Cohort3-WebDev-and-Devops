import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  
const ToggleMessage = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>
      Toggle Message
      </button>
  {isVisible && <p>This Message is Conditionally Randering! </p>}
     
    </div>

  );
};


export default ToggleMessage
