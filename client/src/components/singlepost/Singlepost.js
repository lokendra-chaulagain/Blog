import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function SinglePost() {

    //FETCHING DATA FROM URL KO POST ID----------------------------
    const location = useLocation()
    // console.log(location.pathname)
    const path = location.pathname.split('/')[2]    //taking id only
    console.log(path)

    const [post, setPost] = useState({})
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            console.log(res.data);
            setPost(res.data)
        }
        getPost()
    }, [path]) //whenever this path changes fire this useEffect


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={post.postPic || "/assets/post/1.jpeg"} alt="" />
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link className="link" to="/posts?username=loki">
                                {post.username}
                            </Link>
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                <p className="singlePostDesc">{post.desc} </p>
            </div>
        </div>
    );
}










//CLIENT ONLY=============================
// import { Link } from "react-router-dom";
// import "./singlePost.css";

// export default function SinglePost() {
//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         <img
//           className="singlePostImg"
//           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <h1 className="singlePostTitle">
//           Lorem ipsum dolor
//           <div className="singlePostEdit">
//             <i className="singlePostIcon far fa-edit"></i>
//             <i className="singlePostIcon far fa-trash-alt"></i>
//           </div>
//         </h1>
//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <b className="singlePostAuthor">
//               <Link className="link" to="/posts?username=Safak">
//                 Safak
//               </Link>
//             </b>
//           </span>
//           <span>1 day ago</span>
//         </div>
//         <p className="singlePostDesc">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos!
//           <br />
//           <br />
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
//         </p>
//       </div>
//     </div>
//   );
// }






//=======================================
// import axios from 'axios';
// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import "./singlePost.scss"
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context'
// import { useContext } from 'react'

// function SinglePost() {
//     const location = useLocation()
//     const path = location.pathname.split('/')[2]

//     const { user } = useContext(Context)

//     const [post, setPost] = useState({})
//     useEffect(() => {
//         const getPost = async () => {
//             const res = await axios.get("/posts/" + path)
//             setPost(res.data)
//             setTitle(res.data.title)
//             setDesc(res.data.desc)
//         }
//         getPost()
//     }, [path])


//     //delete handler
//     const handleDelete = async () => {
//         try {
//             await axios.delete("/posts/" + path, { data: { username: user.username } })
//             window.location.replace("/")
//         } catch (error) {

//         }
//     }


//     //update post handler
//     const [title, setTitle] = useState("")
//     const [desc, setDesc] = useState("")
//     const [updateMode, setUpdateMode] = useState(false)



//     const handleUpdate = async () => {

//         try {
//             await axios.put(`/posts/${post._id}`, {
//                 username: user.username, title, desc
//             })
//             // window.location.reload()
//             setUpdateMode(false)
//         } catch (error) {
//         }
//     }



//     return (
//         <div className='singlePost'>
//             <div className="singlePostWrapper">
//                 <img className='singlePostImg' src={post.postPic} alt="" />
//                 <div className="timeLocationUpdateDeleteRow">
//                     <div className='timeLocationRow'>
//                         <span className='postTime'>{new Date(post.createdAt).toDateString()} </span>
//                         <i className="locationIcon fa-solid fa-location-dot"></i>
//                         <span className="locationText">Kathmandu Nepal</span>
//                     </div>




//                     {updateMode ? <input type="text" value={title} className="singlePostTitleInput" onChange={(e) => setTitle(e.target.value)} /> : (

//                         <h1 className="singlePostTitle">{title}

//                             {post.username === user?.username && (
//                                 <div className="updateAndDeleteIcon">

//                                     <i className=" updateIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}   ></i>
//                                     <i className=" deleteIcon fa-solid fa-trash-arrow-up" onClick={handleDelete}  ></i>
//                                 </div>
//                             )}
//                         </h1>

//                     )}
//                     {/* <i className=" updateIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}   ></i>
//                     <i className=" deleteIcon fa-solid fa-trash-arrow-up" onClick={handleDelete}  ></i> */}



//                 </div>
//                 <span className='author'>Author :
//                     <Link to={`/?user=${post.username}`} className="link">
//                         <span className='authorName'>{post.username}</span>
//                     </Link>
//                 </span>


//                 {updateMode ? (<textarea className='singlePostDescriptionInput' value={desc} onChange={(e) => setDesc(e.target.value)} />) :
//                     (
//                         <p className='singlePostDescription'>{desc}</p>)}



//                 {
//                     updateMode && (
//                         <button className='postUpdateBut' onClick={handleUpdate} >Update</button>
//                     )
//                 }

//             </div>

//         </div>

//     )
// }

// export default SinglePost
