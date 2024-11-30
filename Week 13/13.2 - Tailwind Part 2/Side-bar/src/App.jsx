import './App.css'
// import { SidebarClass1 } from './compounents/1-basic-project'
// import { Sidebar2Transition } from './Sidebar2Transition'

function App() {
  
  return (
    <>
    <div className="h-screen dark:bg-gray-800 bg-white  ">
      <button className='bg-yellow-200 m-20 rounded-xl p-2' onClick={() => document.querySelector("html").classList.toggle("dark", document.querySelector("html").classList[0] == "dark" ? false : true)}>Toggle theme</button>




      <div className='text-4xl  dark:text-white  text-black  flex  items-center justify-center'>

100xDevs
      </div>
    </div>



</>
  );
}
export default App



// function App() {
//   const [darkMode, setdarkMode] = useState(true);

//   return (
//     <div className={`h-screen ${darkMode ? "bg-blue-700" : "bg-white"}`}>
//       <button onClick={() => setdarkMode(!darkMode)}>Toggle theme</button>
//     </div>
//   );
// }