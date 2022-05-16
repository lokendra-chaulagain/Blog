// import React from "react";
// import "./write.scss";
// import { useState, useContext } from "react";
// import axios from "axios";
// import { Context } from "../../context/Context";

// function Write() {
//   //user
//   const { user } = useContext(Context);

//   //WRITING BLOG CONTENT AND UPLOADING
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       username: user.username,
//       title,
//       desc,
//     };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       newPost.postPic = filename;

//       try {
//         await axios.post("/upload", data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     try {
//       const res = await axios.post("/posts", newPost);
//       window.location.replace("/post/" + res.data._id);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="write">
//       {file && (
//         <img src={URL.createObjectURL(file)} alt="" className="writePostImg" />
//       )}

//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup1">
//           <label htmlFor="fileInput">
//             <i className=" addIcon fa-solid fa-square-plus"></i>
//           </label>
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <input
//             placeholder="Title"
//             type="text"
//             className="titleInput"
//             autoFocus={true}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>

//         <div className="writeFormGroup2">
//           <input
//             placeholder="Tell your Story ..."
//             type="text"
//             className="descriptionInput "
//             onChange={(e) => setDesc(e.target.value)}
//           />
//           <button className="publishButton" type="submit">
//             Publish
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Write;

//=================================================================>
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./write.scss";

function Write() {
  const { user } = useContext(Context);
  // console.log(use

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timeRead, setTimeRead] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      location,
      timeRead,
    };
    try {
      const res = axios.post("/posts/create", newPost);
      console.log(newPost);
      window.location.replace("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      <img src="" alt="" className="writePostImg" />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup1">
          <label htmlFor="fileInput">
            <i className=" addIcon fa-solid fa-square-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            placeholder="Title"
            type="text"
            className="titleInput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup2">
          <input
            placeholder="Tell your Story ..."
            type="text"
            className="descriptionInput "
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <input
          placeholder="Location ..."
          type="text"
          className="locationInput"
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          placeholder="time to read"
          type="text"
          className="locationInput"
          onChange={(e) => setTimeRead(e.target.value)}
        />
        <button className="publishButton" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
