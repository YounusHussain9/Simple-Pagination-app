import React from "react";
import "./post.css";
const Posts = ({ post, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
