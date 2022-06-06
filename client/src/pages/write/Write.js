import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./write.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"; //to upload image in firebase
import app from "../../firebase";
import TopBar from "../../components/topbar/TopBar";

function Write() {
  const { user } = useContext(Context);
  // console.log(user)

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [timeRead, setTimeRead] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);

  console.log(file);
  const handleClick = (e) => {
    e.preventDefault();
    //uploading same file overwrites so we need to rename it before uploading
    const fileName = new Date().getTime() + file.name; //current time + file name//unique file name
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          // console.log("File available at", downloadURL);
          // newPost.img = downloadURL;
          try {
            const res = axios.post("/posts/create", {
              username: user.username,
              title,
              desc,
              location,
              timeRead,
              img: downloadURL,
            });
            console.log(res.data);
            // console.log(newPost);
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
        <form className="writeForm">
          <img src="" alt="" className="writePostImg" />
          <div className="writeFormGroup1">
            <label htmlFor="fileInput">
              <i className=" addIcon fa-solid fa-square-plus"><p className="selectImg">Select image</p></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
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
          <button className="publishButton" onClick={handleClick}>
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

export default Write;
