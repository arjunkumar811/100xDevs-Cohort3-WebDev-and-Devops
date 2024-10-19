import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
<Route path='/neet/online-coaching-class-11' element = {<Class11Program/>} />
<Route path='/neet/online-coaching-class-12' element = {<Class12Program/>} />
<Route path='/' element = {<Landing Page/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
