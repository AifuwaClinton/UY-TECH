import React, { useEffect, useState } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.blogs || []); // `blogs` or `blog_posts` depending on the response
      })
      .catch((err) => console.error('Error fetching blog posts:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
          <img src={post.photo_url} alt={post.title} className="w-full h-48 object-cover rounded" />
          <p className="text-sm mt-2">{post.content_text.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
