"use client";

import PostCart from "@/Component/core/postCart";
import usePosts from "@/hooks/usePosts";
import Link from "next/link";

const TenPosts = () => {
  const [posts, postLoader] = usePosts([]);
  return (
    <>
      {!postLoader ? (
        <>
          <h1 className="mt-5 mb-3">
            <span className="border-b-2 pb-1 mr-1 text-lg capitalize">
              Posts
            </span>
          </h1>
          <div className="grid md:grid-cols-3 gap-4 border-b pb-4">
            {posts.slice(0, 10)?.map((post) => (
              <PostCart key={post.id} post={post} />
            ))}
          </div>
          <div className="flex justify-end mt-2">
            <Link href="/all-posts" className="border px-4 py-2 rounded bg-white hover:bg-blue-200 duration-100">
              See All
            </Link>
          </div>
        </>
      ) : (
        <div className="loader mt-6"></div>
      )}
    </>
  );
};

export default TenPosts;
