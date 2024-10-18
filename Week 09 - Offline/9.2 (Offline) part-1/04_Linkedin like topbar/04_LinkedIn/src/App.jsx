import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });

  }, [currentTab])

  return (
    <>
      <button onClick={function() {
        setCurrentTab(1)
      }} style={{color: currentTab == 1 ? "red" : "black" }}>Todo #1</button>
      <button onClick={function() {
        setCurrentTab(2)
      }} style={{color: currentTab == 2 ? "red" : "black" }}>Todo #2</button>
      <button onClick={function() {
        setCurrentTab(1)
      }} style={{color: currentTab == 3 ? "red" : "black" }}>Todo #3</button>
      <button onClick={function() {
        setCurrentTab(1)
      }} style={{color: currentTab == 4 ? "red" : "black" }}>Todo #4</button>
      <br /> 
      {loading ? "Loading..." : tabData.title}
    </>
  )
}

export default App
