import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
    const {id} = useParams()
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3000/post-route/singlePost/${id}`)
        .then(res => res.json())
        .then(data => {
            setPosts(data.result)
        })
    },[id])
    return (
        <div>
            <p className="text-center text-4xl mb-6 mt-6">{posts.title}</p>
           <img className="flex mx-auto" src={posts.imageUrl} alt="" />
        </div>
    );
};

export default SinglePost;