// import React from 'react'
// import "./post.scss"
// import { Link } from 'react-router-dom'

// function Post({ post }) {  //taking post props from Posts.js
//     return (
//         <div className='post'>
//             <img className='postImg' src={post.postPic } alt="" />

//             <Link to={`/post/${post._id}`} className="link" >   {/* <Route path="/post/:postId" element={<PostRead />} /> */}
//                 <span className="postTitle">{post.title}</span>
//             </Link >

//             <div className="postCats">
//                 {post.categories.map((c,key) => (
//                     <span key={key}>{c.name}</span>
//                 ))}
//             </div>

//             <div className='timeLocationRow'>
//                 <span className='postTime'>{new Date(post.createdAt).toDateString()}</span>
//                 <i className="locationIcon fa-solid fa-location-dot"></i>
//                 <span className="locationText">Kathmandu Nepal</span>
//                 <p className='postDescription'>{post.desc}</p>
//             </div>
//         </div>
//     )
// }

// export default Post

//============================================================>
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
