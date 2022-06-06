import React from "react";
import "./post.scss";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        <img className="postImg" src={post.img} alt="" />
        <span className="postTitle">{post.title}</span>

        <div className="timeLocationRow">
          <span className="postTime">{post.timeRead} min read</span>
          <i className="locationIcon fa-solid fa-location-dot"></i>
          <span className="locationText">Location : {post.location}</span>
          <p className="postDescription">{post.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default Post;
