
import { useState, useEffect } from "react";


function App() {
   
    return (
        <div>
        <Counter />
        </div>
    );
}


function Counter() {
    
    const [count, setCount] = useState(0);

    console.log("Counter Rendered");    

  
    useEffect(() => {
     
        let clock = setInterval(() => {
           
            setCount((count) => count + 1);
        }, 1000);

  
        console.log("Mounted");

      
        return function () {
            console.log("Unmounted");

            
            clearInterval(clock); 
        };
    }, []); 
    

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}


export default App;