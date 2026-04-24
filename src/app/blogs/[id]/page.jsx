import Link from 'next/link';
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Understanding React Context API",
    author: "Avijeet Karmaker",
    date: "2026-04-10",
    category: "React",
    content:
      "React Context API is a powerful feature that allows you to share state across components without prop drilling. It is useful for global data like themes, authentication, and user settings.",
    tags: ["react", "context", "frontend"],
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features You Should Know",
    author: "Avijeet Karmaker",
    date: "2026-04-08",
    category: "JavaScript",
    content:
      "ES6 introduced many features like arrow functions, destructuring, spread/rest operators, and modules. These features make JavaScript more powerful and easier to write.",
    tags: ["javascript", "es6", "webdev"],
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "Getting Started with React Router",
    author: "Avijeet Karmaker",
    date: "2026-04-05",
    category: "React",
    content:
      "React Router helps you handle navigation in your React applications. It allows you to create multiple pages without reloading the browser.",
    tags: ["react", "router", "navigation"],
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 4,
    title: "CSS Flexbox vs Grid: When to Use What",
    author: "Avijeet Karmaker",
    date: "2026-04-02",
    category: "CSS",
    content:
      "Flexbox is one-dimensional, while Grid is two-dimensional. Use Flexbox for layouts in a single row or column, and Grid for complex layouts.",
    tags: ["css", "flexbox", "grid"],
    image: "https://via.placeholder.com/400x250",
  },
];

const BlogDetailPage = async ({params}) => {
    const {id} = await params;
    const blog = blogs.find(blog => blog.id == id);

    return (
      <div>
        {blog && (
          <div>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.category}</p>
            <p>{blog.content}</p>
          </div>
        )}
      </div>
    );
};

export default BlogDetailPage;