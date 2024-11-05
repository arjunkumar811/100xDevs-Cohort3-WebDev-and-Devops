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




export const useFetch = (url) => {

const [finalData, setFinalData] = useState({});

const [loading, setLoading] = useState(true);

async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = response.json();

    setFinalData(json)

    setLoading(false);
}

useEffect(() => {
 getDetails();
}, [url]);


return {finalData, loading}
} 