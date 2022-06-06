import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./write.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import TopBar from "../../components/topbar/TopBar";

function Write() {
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timeRead, setTimeRead] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  console.log(file);
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading(true);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            const res = axios.post("/posts/create", {
              username: user.username,
              title,
              desc,
              location,
              timeRead,
              img: downloadURL,
            });
            setUploading(true);
            console.log(res.data);
            window.location.replace("/");
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };
  console.log(file);

  return (
    <>
      <TopBar />
      <div className="write">
        <form className="writeForm" onSubmit={handleClick}>
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="writePostImg"
            />
          ) : (
            <img src="" alt="" className="writePostImg" />
          )}
          <div className="writeFormGroup1">
            <label htmlFor="fileInput">
              <i className=" addIcon fa-solid fa-square-plus">
                <p className="selectImg">Select image</p>
              </i>
              {!file && <span className="star"> ( * photo required ) </span>}
            </label>

            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              required
              onChange={(e) => setFile(e.target.files[0])}
            />

            <input
              placeholder="Title"
              type="text"
              className="titleInput"
              onChange={(e) => setTitle(e.target.value)}
              autoFocus={true}
            />
            {!title && <span className="star1">*</span>}
          </div>

          <div className="writeFormGroup2">
            <textarea
              placeholder="Tell your Story ..."
              type="text"
              required
              className="descriptionInput "
              onChange={(e) => setDesc(e.target.value)}
            />
             {!desc && <span className="star1">*</span>}
          </div>
          <input
            placeholder="Location ..."
            type="text"
            className="locationInput"
            required
            onChange={(e) => setLocation(e.target.value)}
          />
           {!location && <span className="star1">*</span>}

          <input
            placeholder="time to read"
            type="number"
            min={1}
            max={60}
            className="locationInput"
            required
            onChange={(e) => setTimeRead(e.target.value)}
          />
           {!timeRead && <span className="star1">*</span>}
          <button className="publishButton" type="submit">
            {uploading ? "Uploading..." : "Publish"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Write;
