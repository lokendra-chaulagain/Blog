// import React from "react";
// import "./setting.scss";
// import Rightbar from "../../components/rightbar/Rightbar";

// import { Context } from "../../context/Context";
// import { useContext } from "react";
// import { useState } from "react";
// import axios from "axios";

// function Setting() {
//   //user
//   const { user, dispatch } = useContext(Context);

//   //UPDATING USER INFORMATION
//   const [file, setFile] = useState(null);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "UPDATE_START" });
//     const updatedUser = {
//       userId: user._id,
//       username,
//       email,
//       password,
//     };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       updatedUser.profilePic = filename;
//       try {
//         await axios.put("/upload", data);
//       } catch (error) {}
//     }
//     try {
//       const res = await axios.put("/users/" + user._id, updatedUser);
//       setSuccess(true);
//       dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
//       // window.location.reload()
//     } catch (error) {
//       dispatch({ type: "UPDATE_FAILURE" });
//     }
//   };

//   return (
//     <div className="setting">
//       <div className="settingWrapper">
//         <span className="headingTxt">Update Your Account</span>
//         <span className="deleteAccountTxt">Delete Account</span>
//         <form className="profileUpdateform" onSubmit={handleSubmit}>
//           <div className="profileTxtPicIconCon">
//             <img
//               src={file ? URL.createObjectURL(file) : user.profilePic}
//               alt=""
//               className="profileImg"
//             />
//             <label htmlFor="fileInput">
//               <i class="settingProfileUploadIcon fa-regular fa-image"></i>
//             </label>
//             <input
//               type="file"
//               id="fileInput"
//               style={{ display: "none" }}
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//           </div>

//           <label className="profilePicTxt">Profile Picture</label>

//           <div className="usernameEmailPasswordContainer">
//             <label className="labelTxt">Username</label>
//             <input
//               className="updateInput"
//               type="text"
//               placeholder={user.username}
//               onChange={(e) => setUsername(e.target.value)}
//             />

//             <label className="labelTxt">Email</label>
//             <input
//               className="updateInput"
//               type="email"
//               placeholder={user.email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="labelTxt">Password</label>
//             <input
//               className="updateInput"
//               type="password"
//               placeholder="********"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button className="profileUpdateButton" type="submit">
//               Update
//             </button>

//             {success && (
//               <div className="successMsg" style={{ color: "green" }}>
//                 Profile has been updated
//               </div>
//             )}
//           </div>
//         </form>
//       </div>
//       <Rightbar />
//     </div>
//   );
// }

// export default Setting;

/////////////////
import React, { useContext, useEffect, useState } from "react";
import "./setting.scss";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { Context } from "../../context/Context";
import DeleteAlert from "../../components/deleteAlert/DeleteAlert";

function Setting() {
  const { user } = useContext(Context);

  //Update user
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
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

  //
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <div className="setting">
      <div className="settingWrapper">
        <span className="headingTxt">Update Your Account</span>
        <span className="deleteAccountTxt" onClick={()=>setShowDeleteAlert(!showDeleteAlert)}>Delete Account</span>
        <form className="profileUpdateform" onSubmit={handleSubmit}>
          <div className="profileTxtPicIconCon">
            <img src="" alt="" className="profileImg" />
            <label htmlFor="fileInput">
              <i className="settingProfileUploadIcon fa-regular fa-image"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
         {showDeleteAlert && <DeleteAlert/>}

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

            {/* {success && (
              <div className="successMsg" style={{ color: "green" }}>
                Profile has been updated
              </div>
            )} */}
          </div>
        </form>
      </div>
      <Rightbar />
    </div>
  );
}

export default Setting;
