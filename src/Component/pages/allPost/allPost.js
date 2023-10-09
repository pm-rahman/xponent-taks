import React from 'react';
import CategoryPost from './categoryPost/categoryPost';

const AllPost = () => {
    return (
        <>
            <CategoryPost category="sort"/>
            <CategoryPost category="long"/>
            <CategoryPost category="group"/>
            <CategoryPost category="blog"/>
        </>
    );
};

export default AllPost;