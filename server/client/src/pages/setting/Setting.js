import React, { useContext, useEffect, useState } from "react";
import "./setting.scss";
import axios from "axios";
import { Context } from "../../context/Context";
import DeleteAlert from "../../components/deleteAlert/DeleteAlert";
import TopBar from "../../components/topbar/TopBar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

function Setting() {
  const { user } = useContext(Context);

  //Update user
  const [username, setUsername] = React.useState(user.username);
  const [email, setEmail] = React.useState(user.email);
  const [password, setPassword] = React.useState("");
  const [file, setFile] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
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
          try {
            axios.put("/users/update/" + user._id, {
              username,
              email,
              password,
              profilePic: downloadURL,
            });
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  //Fetching current user
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getUserDetails = async () => {
      const details = await axios.get("users/get/" + user._id);
      console.log(details);
      setCurrentUser(details.data);
    };
    getUserDetails();
  }, [user._id]);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <TopBar />
      <div className="setting">
        <div className="settingWrapper">
          <span className="headingTxt">Update Your Account</span>

          <span
            className="deleteAccountTxt"
            onClick={() => setShowDeleteAlert(!showDeleteAlert)}
          >
            <DeleteOutlineIcon />
            Delete Account
          </span>

          <form className="profileUpdateform" onSubmit={handleSubmit}>
            <div className="profileTxtPicIconCon">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="profileImg"
                />
              ) : (
                <img
                  src={currentUser.profilePic}
                  alt=""
                  className="profileImg"
                />
              )}

              <label htmlFor="fileInput">
                <i className="settingProfileUploadIcon fa-regular fa-image"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              {showDeleteAlert && <DeleteAlert />}
            </div>

            <label className="profilePicTxt">Profile Picture</label>

            <div className="usernameEmailPasswordContainer">
              <label className="labelTxt">Username</label>
              <input
                className="updateInput"
                type="text"
                defaultValue={currentUser?.username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className="labelTxt">Email</label>
              <input
                className="updateInput"
                type="email"
                defaultValue={currentUser?.email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="labelTxt">Password</label>
              <input
                className="updateInput"
                type="text"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="profileUpdateButton" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Setting;
