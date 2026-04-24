import Link from 'next/link';
import React from 'react';


export const metadata = {
  title: "posts",
  description: "...",
};



 

const PostsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts = await res.json();
    return (
        
        <div className="grid grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="card card-border bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link href={`/posts/${post.id}`}>See More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

    );
};

export default PostsPage;