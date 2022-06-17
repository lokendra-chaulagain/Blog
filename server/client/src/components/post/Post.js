import "./post.scss";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

function Post({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div
        className="post"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img className="postImg" src={post.img} alt="" />
        <span className="postTitle">{post.title}</span>
        <div className="createdAndAuthorDiv">
          <span className="postCreateDate">{format(post.createdAt)}</span>
          <span className="authorPost">
            <span className="auth">Author : </span> {post.username}
          </span>
        </div>
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
