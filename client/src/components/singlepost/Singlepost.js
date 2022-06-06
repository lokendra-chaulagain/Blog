import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./singlePost.css";
import axios from "axios";
import { format } from "timeago.js";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/get/" + path);
      console.log(res.data);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  //Edit Blog
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);
  const handleEditSave = async () => {
    const updatePost = {
      title,
      desc,
    };
    const res = await axios.put("/posts/update/" + post._id, updatePost);
    console.log(res.data);
    window.location.reload();
  };
  console.log(post);

  //show delete alert
  const [showDeleteCon, setShowDeleteCon] = useState(false);

  //Delete Post
  const handlePostDelete = async () => {
    await axios.delete("/posts/delete/" + path);
    console.log("Post has been deleted");
    window.location.replace("/");
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.img} alt="" />
        {editMode && (
          <Link to={`/post/${post._id}`} className="link">
            <button className="editCancel" onClick={handleEditSave}>
              <ArrowBackIcon />
              Cancel
            </button>
          </Link>
        )}

        {editMode ? (
          <input
            type="text"
            className="editTitle"
            defaultValue={post.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setEditMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={() => setShowDeleteCon(!showDeleteCon)}
              ></i>

              {/* Post Delete Alert------------------------------ */}
              {showDeleteCon && (
                <div className="deleteContainer1">
                  <span className="areYouSure1">
                    Are you sure you want to delete this post?
                  </span>
                  <div className="nuYesRow1">
                    <button
                      className="nuNoBtn1"
                      onClick={() => setShowDeleteCon(!showDeleteCon)}
                    >
                      No
                    </button>
                    <button className="nuYesBtn1" onClick={handlePostDelete}>
                      Yes
                    </button>
                  </div>
                </div>
              )}
              {/* ----------------------------- */}
            </div>
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">{post.username}</b>
          </span>
          <span className="createdTime">{format(post.createdAt)}</span>
        </div>
        {editMode ? (
          <textarea
            type="text"
            className="editDesc"
            defaultValue={post.desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}

        {editMode && (
          <button className="editSave" onClick={handleEditSave}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
