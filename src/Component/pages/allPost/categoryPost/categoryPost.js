"use client";
import PostCart from "@/Component/core/postCart";
import usePosts from "@/hooks/usePosts";
const CategoryPost = ({ category }) => {
  const [posts] = usePosts();
  //   category check
  const categoryPost = posts.filter((post) => post.category === category);
  return (
    <>
      {categoryPost.length > 0 && (
        <>
          <h1 className="mt-5 mb-3 text-center">
            <span className="border-b-2 pb-1 mr-1 text-lg capitalize">
              {category}
            </span>
            Posts
          </h1>
          <div className="grid md:grid-cols-3 gap-4 pb-4">
            {categoryPost?.map((post) => (
              <PostCart key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CategoryPost;
