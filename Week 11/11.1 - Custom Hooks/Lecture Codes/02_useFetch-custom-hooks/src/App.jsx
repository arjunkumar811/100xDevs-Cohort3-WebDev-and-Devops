import { useEffect, useState } from 'react'
import './App.css'
import { usePostTitle , useFetch } from './hooks/useFetch';


function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/todos/1" + currentPost);

if(loading) {
  return <div>
    Loading....
  </div>
}
 
return (
  <div>
    <button onClick={() => setCurrentPost(1)}></button>
    <button onClick={() => setCurrentPost(2)}></button>
    <button onClick={() => setCurrentPost(3)}></button>
    {JSON.stringify(finalData)}
  </div>
)


}









// /////////////////////////////
// function App() {
//   const postTitle = usePostTitle();

//   return (
//     <>
//      {/* Display the post title and body */}
//     {postTitle}
//     </>
//   );
// }

 export default App


