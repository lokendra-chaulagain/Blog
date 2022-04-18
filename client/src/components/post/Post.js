import React from 'react'
import "./post.scss"
import { Link } from 'react-router-dom'


function Post({ post }) {
    return (
        <div className='post'>
            <img className='postImg' src={post.postPic} alt="" />

            <Link to={`/post/${post._id}`} className="link" >
                <span className="postTitle">{post.title}</span>
            </Link>

            <div className="postCats"   >
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