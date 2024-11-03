import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState({});

 async function getPosts() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  setPosts(json);
}


  useEffect(() => {
   getPosts();
  }, []) 

  return (
    <>
    {posts.userId}
    {posts.title}
    </>
  )
}

export default App
