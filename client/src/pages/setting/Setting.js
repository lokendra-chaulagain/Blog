import React, { useContext, useEffect, useState } from "react";
import "./setting.scss";
import axios from "axios";
import { Context } from "../../context/Context";
import DeleteAlert from "../../components/deleteAlert/DeleteAlert";
import TopBar from "../../components/topbar/TopBar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Setting() {
  const { user } = useContext(Context);

  //Update user
  const [username, setUsername] = React.useState(user.username);
  const [email, setEmail] = React.useState(user.email);
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put("/users/update/" + user._id, {
      username,
      email,
      password,
    });
    window.location.reload();
    console.log(res);
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
              <img src="" alt="" className="profileImg" />
              <label htmlFor="fileInput">
                <i className="settingProfileUploadIcon fa-regular fa-image"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
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
