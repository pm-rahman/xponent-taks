"use client";

import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [postLoader, setPostLoader] = useState(false);
  useEffect(() => {
    setPostLoader(true);
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setPostLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setPostLoader(false)
      });
  }, []);
  return [posts,postLoader];
};

export default usePosts;
