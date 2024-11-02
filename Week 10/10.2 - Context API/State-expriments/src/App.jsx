import { useState , useContext, createContext} from 'react'


const BulbContext = createContext();

function App() { 
  const [Bulbon, setBulbon] = useState(true);


 return (  
 <div>
  <BulbContext.Provider value={{
    Bulbon: Bulbon,
    setBulbon: setBulbon
  }}> 
  <LightBulb />
  </BulbContext.Provider>
 </div>
 );
}

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}


function BulbState(){

  const { Bulbon } = useContext(BulbContext);
  return <div>
{Bulbon ? "Bulb On" : "Bulb Off"}
  </div>
}


function ToggleBulbState() {

const { Bulbon, setBulbon } = useContext(BulbContext);

  function Toggle() {
    setBulbon(!Bulbon);
    } 

  return <div>
    <button onClick={Toggle}>Toggle the bulb</button>
  </div>
}

export default App;



// CONSTEXT API NOT STRUCTURED

// function App() { 
//   const [Bulbon, setBulbon] = useState(true);


//  return (  
//  <div>
//   <BulbContext.Provider value={{
//     Bulbon: Bulbon,
//     setBulbon: setBulbon
//   }}> 
//   <LightBulb />
//   </BulbContext.Provider>
//  </div>
//  );
// }


// function LightBulb() {
//   return (
//     <div>
//       <BulbState />
//       <ToggleBulbState />
//     </div>
//   );
// }


// function BulbState(){

//   const { Bulbon } = useContext(BulbContext);
//   return <div>
// {Bulbon ? "Bulb On" : "Bulb Off"}
//   </div>
// }


// function ToggleBulbState() {

// const { Bulbon, setBulbon } = useContext(BulbContext);

//   function Toggle() {
//     setBulbon(!Bulbon);
//     } 

//   return <div>
//     <button onClick={Toggle}>Toggle the bulb</button>
//   </div>
// }

// export default App;


