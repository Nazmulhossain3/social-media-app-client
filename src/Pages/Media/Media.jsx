import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Media = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://social-media-app-server-vert.vercel.app/post-route/getAllPost')
      .then(res => res.json())
      .then(data => {
        setPosts(data.result);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleLoveClick = (postId) => {
    fetch(`https://social-media-app-server-vert.vercel.app/post-route/incrementReactions/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result && data.result._id) {
          // Update the posts state with the updated post
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post._id === data.result._id ? data.result : post
            )
          );
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error('Invalid data structure:', data);
        }
      })
      .catch((error) => {
        console.error('Error incrementing reactions count:', error);
      });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-12 gap-10">
      {posts.map((post, index) => (
        <div key={index}>
          <p className="text-xl mb-4">{post.title}</p>
          <img className="lg:h-64" src={post.imageUrl} alt="" />
      
        <div className="flex items-center">
        <img
            onClick={() => handleLoveClick(post._id)}
            className="w-12 h-8 cursor-pointer"
            src="https://i.ibb.co/bbbzD8s/love-react-icon-3d-render-vector-removebg-preview.png"
            alt=""
          />
          <p>{post.reactionsCount}</p>
        </div>
          <Link to={`/signlePost/${post._id}`}>
            <button className="border py-2 px-8 mt-2 bg-green-500 text-white hover:bg-yellow-600">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Media;
