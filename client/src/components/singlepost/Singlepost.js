import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom';
import "./singlePost.scss"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context'
import { useContext } from 'react'

function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]

    const { user } = useContext(Context)

    const [post, setPost] = useState({})
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
        }
        getPost()
    }, [path])


    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, { data: { username: user.username } })
            window.location.replace("/")
        } catch (error) {

        }
    }


    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src={post.postPic} alt="" />
                <div className="timeLocationUpdateDeleteRow">
                    <div className='timeLocationRow'>
                        <span className='postTime'>{new Date(post.createdAt).toDateString()} </span>
                        <i className="locationIcon fa-solid fa-location-dot"></i>
                        <span className="locationText">Kathmandu Nepal</span>
                    </div>

                    {post.username === user?.username && (
                        <div className="updateAndDeleteIcon">
                            <i className=" updateIcon fa-solid fa-pen-to-square"></i>
                            <i className=" deleteIcon fa-solid fa-trash-arrow-up" onClick={handleDelete}  ></i>
                        </div>
                    )}

                </div>
                <h1 className="singlePostTitle">{post.title}</h1>
                <span className='author'>Author :
                    <Link to={`/?user=${post.username}`} className="link">
                        <span className='authorName'>{post.username}</span>
                    </Link>
                </span>
                <p className='singlePostDescription'>{post.desc}</p>
            </div>
        </div>
    )
}
export default SinglePost