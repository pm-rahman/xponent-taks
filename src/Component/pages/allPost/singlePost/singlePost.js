"use client";
import { useEffect, useState } from "react";

const SinglePost = ({ id }) => {
  // console.log(params)
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      {!loading ? (
        <div>
          <h2 className="text-lg mt-4 capitalize text-center bg-white p-4 rounded">
            {post.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-2 mt-2">
            <p className="col-span-2 bg-white p-4 rounded h-full">
              {post.content}
            </p>
            <div className="bg-white p-4 rounded h-full">
              <p>Category: {post.category}</p>
              <p>Author: {post.userName}</p>
              <p>E-Mail: {post.userEmail}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 loader"></div>
      )}
    </>
  );
};

export default SinglePost;
