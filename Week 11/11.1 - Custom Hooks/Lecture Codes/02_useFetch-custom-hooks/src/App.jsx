import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usePostTitle } from './hooks/useFetch';

function App() {
  const postTitle = usePostTitle();

  return (
    <>
    {postTitle}
    </>
  )
}

export default App
