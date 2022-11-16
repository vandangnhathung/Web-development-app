import React from "react";
import axios from "axios";
const baseURL = "http://localhost:8001/dating/";
const TinderCard = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  console.log(post);
  return (
    <div className="w-[300px] h-[300px] border px-5 py-7 rounded-3xl mt-6 border-[#e8e5e5] overflow-hidden">
      {post.map((item, idx) => (
        <img
          key={item._id}
          src={item.imgUrl}
          className="w-full h-full object-cover rounded-lg shadow-3xl"
          alt=""
        />
      ))}
    </div>
  );
};

export default TinderCard;
