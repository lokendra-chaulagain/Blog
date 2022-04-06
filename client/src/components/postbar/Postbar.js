import React from 'react'
import Post from '../post/Post'
import "./postbar.scss"

// taking props from Home.js
function Postbar({ posts }) {
    return (
        <div className='postbar'>
            {posts.map((p,id) => (
                <Post key={id}  post={p} />
            ))}

            {/* <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/> */}

        </div>
    )
}

export default Postbar