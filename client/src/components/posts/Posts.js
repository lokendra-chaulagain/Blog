// import React from 'react'
// import Post from '../post/Post'
// import "./posts.scss"

// function Posts({ posts }) {    //taking posts props from Home.js
//     return (
//         <div className='posts'>
//             {posts.map((p ,key) => (
//                 <Post key={key} post={p} />   //passing this Post as props to Post.js
//             ))}
//         </div>
//     )
// }

// export default Posts

///
import React from "react";
import Post from "../post/Post";
import "./posts.scss";

function Posts({ posts }) {
  //taking posts props from Home.js
  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post key={key} post={post}  />
      ))}
    </div>
  );
}

export default Posts;
