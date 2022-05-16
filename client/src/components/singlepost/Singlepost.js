// import { Link, useLocation } from "react-router-dom";
// import "./singlePost.css";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Context } from "../../context/Context";

// export default function SinglePost() {
//   const { user } = useContext(Context);

//   //FETCHING DATA FROM URL KO POST ID----------------------------
//   const location = useLocation();
//   // console.log(location.pathname)
//   const path = location.pathname.split("/")[2]; //taking id only
//   console.log(path);

//   const [post, setPost] = useState({});
//   useEffect(() => {
//     const getPost = async () => {
//       const res = await axios.get("/posts/" + path);
//       console.log(res.data);
//       setPost(res.data);

//       //edit post
//       setTitle(res.data.title);
//       setDesc(res.data.desc);
//     };

//     getPost();
//   }, [path]); //whenever this path changes fire this useEffect

//   //DELETE POST--------------------
//   const handleDelete = async () => {
//     try {
//       await axios.delete("/posts/" + path, {
//         data: { username: user.username },
//       });
//       window.location.replace("/");
//     } catch (error) {}
//   };

//   //EDIT POST---------------------------
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [updateMode, setUpdateMode] = useState(false);

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`/posts/${post._id}`, {
//         username: user.username,
//         title,
//         desc,
//       });
//       window.location.reload();
//       setUpdateMode(false);
//     } catch (error) {}
//   };

//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         <img
//           className="singlePostImg"
//           src={post.postPic || "/assets/post/1.jpeg"}
//           alt=""
//         />

//         {/* edit Title  */}
//         {updateMode ? (
//           <input
//             type="text"
//             value={title}
//             className="singlePostTitleUpdateMode"
//             autoFocus
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         ) : (
//           <h1 className="singlePostTitle">
//             {post.title}

//             {/* only the owner can see edit and delete button */}
//             {post.username === user.username && (
//               <div className="singlePostEdit">
//                 <i
//                   className="singlePostIcon far fa-edit"
//                   onClick={() => setUpdateMode(true)}
//                 ></i>
//                 <i
//                   className="singlePostIcon far fa-trash-alt"
//                   onClick={handleDelete}
//                 ></i>
//               </div>
//             )}
//           </h1>
//         )}

//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <b className="singlePostAuthor">
//               <Link className="link" to={`/?user=${post.username}`}>
//                 {post.username}
//               </Link>
//             </b>
//           </span>
//           <span>1 day ago</span>
//         </div>

//         {/* edit Description */}
//         {updateMode ? (
//           <textarea
//             value={desc}
//             className="singlePostDescUpdateMode"
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         ) : (
//           <p className="singlePostDesc">{post.desc} </p>
//         )}

//         {updateMode && (
//           <button className="postUpdateBut" onClick={handleUpdate}>
//             Update
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

//==========================================================>
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { format } from "timeago.js";

export default function SinglePost() {
  //Fetching data from URL id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res.data);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="" alt="" />
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
            <b className="singlePostAuthor">{post.username}</b>
          </span>
          <span>{format(post.createdAt)}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
