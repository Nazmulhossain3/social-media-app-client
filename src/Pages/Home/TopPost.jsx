import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopPost = () => {

    const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetch('https://social-media-app-server-vert.vercel.app/post-route/getTopPost')
      .then(res => res.json())
      .then(data => {
        setTopPosts(data.result);
      });
  }, []);


    return (
      <div>
        <h2 className="text-3xl text-center pt-8">Our Top Post</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-12 gap-10">
      {topPosts.map((post, index) => (
        <div key={index}>
          <p className="text-xl mb-4">{post.title}</p>
          <img className="lg:h-64" src={post.imageUrl} alt="" />
          <div className="flex items-center">
          <img
            className="w-12 h-8"
            src="https://i.ibb.co/bbbzD8s/love-react-icon-3d-render-vector-removebg-preview.png"
            alt=""
          />
          <p>{post.reactionsCount}</p>
          </div>

          <Link to={`/signlePost/${post._id}`}>
            <button className="border py-2 px-8 mt-2 bg-green-500 text-white hover:bg-yellow-600">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
      </div>
    );
};

export default TopPost;