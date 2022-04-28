import React from 'react'
import Post from '../post/Post'
import "./posts.scss"


function Posts({ posts }) {    //taking posts props from Home.js
    return (
        <div className='posts'>
            {posts.map((p) => (
                <Post post={p} />   //passing this Post as props to Post.js
            ))}
        </div>
    )
}

export default Posts

























//CLIENT ONLY===========>
// import React from 'react'
// import Post from '../post/Post'
// import "./posts.scss"


// //taking posts props from Home.js
// function Posts() {
//     return (
//         <div className='posts'>
//                 <Post  />
//                 <Post  />
//                 <Post  />
//                 <Post  />
//         </div>
//     )
// }

// export default Posts



//====================
// import React from 'react'
// import Post from '../post/Post'
// import "./posts.scss"


// function Posts({ posts }) {
//     return (
//         <div className='posts'>
//             {posts.map((p) => (
//                 <Post post={p} />
//             ))
//             }
//         </div>
//     )
// }

// export default Posts
