import Link from "next/link";

const PostCart = ({post}) => {
    return (
        <Link href={`/all-posts/${post?.id}`} className="border bg-white hover:bg-blue-100 duration-100 shadow-sm hover:shadow p-4 rounded overflow-hidden">
            <h2 className="text-lg font-semibold capitalize">{post.title}</h2>
            <p className="border-b pb-1 capitalize"><span className="font-normal pb-1">Blog Type</span>: {post.category}</p>
            <p className="mt-1">{post.content.length>300?<>{post.content.slice(0,300)} <span className="font-semibold">see more..</span></>:post.content}</p>
        </Link>
    );
};

export default PostCart;