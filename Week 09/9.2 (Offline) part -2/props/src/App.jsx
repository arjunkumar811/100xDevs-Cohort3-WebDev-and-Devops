import { useState } from 'react'

const App = () => {
  return <Greeting name="Arjun"/>
}

const Greeting = ({ name }) => {
   return <h1> Hello, {name}!, </h1>
}
 

 
export default App
