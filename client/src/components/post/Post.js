import React from 'react'
import "./post.scss"
import { Link } from 'react-router-dom'


// taking props from postbar.js
function Post({ post }) {
    return (
        <div className='post'>
            {/*condition  for postPic */}
            {post.postPic && (
                <img className='postImg' src={post.postPic} alt="" />

            )}


            {/* <Link to="/register" className='link' >Create an Account</Link> */}


            <Link to={`/post/${post._id}`} className="link"  ><span className="postTitle">{post.title}</span> </Link>

            {/* <img className='postImg' src="assets/post/5.jpeg" alt="" /> */}
            <div className="postCats timeLocationRow">
                {/* <span className="postCat">Music</span>
                <span className="postCat">Life</span> */}
                {post.categories.map((c) => (
                    <span className="postCat">{c.name}</span>
                ))}
            </div>


            
            <div className='timeLocationRow'>
                <span className='postTime'>{new Date(post.createdAt).toDateString()}</span>
                <i className="locationIcon fa-solid fa-location-dot"></i>
                <span className="locationText">Kathmandu Nepal</span>
                <p className='postDescription'>{post.desc}</p>
            </div>


        </div>
    )
}

export default Post