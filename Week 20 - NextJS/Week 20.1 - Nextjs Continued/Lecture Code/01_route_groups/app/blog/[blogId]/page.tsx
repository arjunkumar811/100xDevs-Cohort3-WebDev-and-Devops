import axios from "axios";

interface Params {
    blogId : string;
}

export default async function BlogPage({params}: {params : Params}) {
    const PostId =  params.blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${PostId}`);
    const data = response.data;

    return (
        <div>
            <h1>Blog page</h1>
            <p>Title - {data.title}</p>
            <p>Body - {data.body}</p>
        </div>
    );
    
}