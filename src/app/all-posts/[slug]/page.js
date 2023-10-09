import SinglePost from "@/Component/pages/allPost/singlePost/singlePost";

const Post = ({params}) => {
    const {slug}=params;
    return (
        <>
            <SinglePost id={slug} />
        </>
    );
};

export default Post;