import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Media = () => {

    const [posts, setPosts] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:3000/post-route/getAllPost')
        .then(res => res.json())
        .then(data => {
            setPosts(data.result)
        })
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-12 gap-10 ">
           {
            posts.map((post,index)=> <div key={index}>
                <p className="text-xl mb-4">{post.title}</p>
                <img className="lg:h-64" src={post.imageUrl} alt="" />
                <img className="w-12 h-8" src="https://i.ibb.co/bbbzD8s/love-react-icon-3d-render-vector-removebg-preview.png" alt="" />

                <Link to={`/signlePost/${post._id}`} ><button className="border py-2 px-8 mt-2 bg-green-500 text-white hover:bg-yellow-600">Details</button></Link>

            </div> )
           }
        </div>
    );
};

export default Media;