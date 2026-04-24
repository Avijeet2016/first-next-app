import React from 'react';

const PostDetail = async ({params}) => {
    const {postId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();
    return (
        <div>
            <h2 className='font-bold text-3xl'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;