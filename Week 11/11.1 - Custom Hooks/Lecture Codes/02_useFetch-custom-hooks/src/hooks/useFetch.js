import { useEffect, useState } from "react";

export function usePostTitle() {
    const [posts, setPosts] = useState({});

    async function getPosts() {
     const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
     const json = await response.json();
     setPosts(json);
   }
   
   
     useEffect(() => {
      getPosts();
     }, [])  

     return posts.title;
}