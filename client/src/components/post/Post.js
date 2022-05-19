import React from "react";
import "./post.scss";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        <img className="postImg" src={post.img} alt="" />
        <span className="postTitle">{post.username}</span>
        <div className="postCats">
          <span>Sports</span>
        </div>

        <div className="timeLocationRow">
          <span className="postTime">{post.title}</span>
          <i className="locationIcon fa-solid fa-location-dot"></i>
          <span className="locationText">{post.location}</span>
          <p className="postDescription">{post.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default Post;
