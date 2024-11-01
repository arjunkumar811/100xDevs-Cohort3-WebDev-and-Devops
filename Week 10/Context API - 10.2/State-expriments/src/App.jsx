import { useState } from 'react'


function App() {
 return <div>
  <LightBulb />
 </div>
}


function LightBulb(){
  const [Bulbon, setBulbon] = useState(true);

  return <div>
    <BulbState Bulbon={Bulbon} />
    <ToggleBulbState Bulbon={Bulbon}  setBulbon={setBulbon} />
  </div>
}


function BulbState({Bulbon}){
  return <div>
{Bulbon ? "Bulb On" : "Bulb Off"}
  </div>
}



function ToggleBulbState({Bulbon, setBulbon}) {

  function Toggle() {
    setBulbon(!Bulbon);
    } 

  return <div>
    <button onClick={Toggle}>Toggle the bulb</button>
  </div>
}

export default App;
