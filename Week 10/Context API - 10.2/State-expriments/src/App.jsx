import { useState } from 'react'
import ToggleMessage from './../../../../Week 09 - Offline/9.2 (Offline) part -2/Conditional Rendering/src/App';

function App() {
 return <div>
  <LightBulb />
 </div>
}


function LightBulb(){
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}


function BulbState(){
  return <div>

  </div>
}

function ToggleMessage() {
  return <div>
    <button>Toggle the bulb</button>
  </div>
}

export default App;
