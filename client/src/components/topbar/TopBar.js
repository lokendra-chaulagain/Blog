// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context';
// import "./topBar.scss"
// import { useContext } from 'react';

// function TopBar() {

//     const { user } = useContext(Context)

//     //FOR LOGOUT
//     const { dispatch } = useContext(Context)
//     const handleLogout = (e) => {
//         dispatch({ type: "LOGOUT" })
//     }

//     return (
//         <div className='topBarCon'>
//             <div className="topLeft">
//                 <i className=" topIcon fa-brands fa-facebook-square"></i>
//                 <i className=" topIcon fa-brands fa-twitter-square"></i>
//                 <i className=" topIcon fa-brands fa-pinterest-square"></i>
//                 <i className=" topIcon fa-brands fa-instagram-square"></i>
//             </div>

//             <div className="searchCon">
//                 <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
//             </div>

//             <div className="topCenter">
//                 <ul className="topList">
//                     <li className="topListItems">
//                         <Link to="/" className=' link ' active  >HOME</Link>
//                     </li>

//                     <li className="topListItems">
//                         <Link to="/about" className='link' >ABOUT</Link>
//                     </li>

//                     <li className="topListItems">
//                         <Link to="/contact" className='link' >CONTACT</Link>
//                     </li>

//                     <li className="topListItems">
//                         <Link to="/write" className='link' >WRITE</Link>
//                     </li>

//                     <li className="topListItems" onClick={handleLogout} >{user && "LOGOUT"}</li>
//                 </ul>
//             </div>

//             <div className="topRight">
//                 <Link to={"/setting"} >
//                     {user ? (<img className='topImg' src={user.profilePic || "assets/person/1.jpeg"} alt="" />
//                     ) : (
//                         <ul className="topList" >
//                             <li className="topListItems">
//                                 <Link to="/login" className='link'    >LOGIN</Link>
//                             </li>
//                             <li className="topListItems"  >
//                                 <Link to="/register" className=' link' >REGISTER</Link>
//                             </li>
//                         </ul>)}
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default TopBar

//CLIENT ONLY===========>
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import "./topBar.scss";

import Drawer from "../drawer/Drawer";
import ToggleButton from "../toggleButton/ToggleButton";
import DrawerSlider from "../drawerSlider/DrawerSlider";

function TopBar() {
  const { user } = useContext(Context);
  const currentUser = user;

  //Fetch user details
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`/users/get/${currentUser?._id}`);
      setUserDetails(res.data);
      console.log(res.data);
    };
    getUserDetails();
  }, [currentUser]);

  //Logout
  const { dispatch } = useContext(Context);
  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  //Logout Alternative
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.replace("/login");
  // };

  // const [isOpen, setIsOpen] = useState(false);
  // const handleDrawerOpen = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [openSlider, setOpenSlider] = useState(false);
  // const showSideBar = () => {
  //   setOpenSlider(!openSlider);
  // };

  return (
    <div className="topBarCon">
      {/* <HorizontalSplitIcon
        className="drawerIcon"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <Drawer isOpen={isOpen} />} */}
      <HorizontalSplitIcon className="barIcon"  />
      <DrawerSlider />
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook-square"></i>
        <i className=" topIcon fa-brands fa-twitter-square"></i>
        <i className=" topIcon fa-brands fa-pinterest-square"></i>
        <i className=" topIcon fa-brands fa-instagram-square"></i>
      </div>

      <div className="searchCon">
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link to="/" className=" link ">
              HOME
            </Link>
          </li>

          <li className="topListItems">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItems" onClick={handleLogout}>
            LOGOUT
          </li>
          <ToggleButton />
        </ul>
      </div>

      <div className="topRight">
        <Link to={"/setting"}>
          <img className="topImg" src={userDetails?.profilePic} alt="" />
        </Link>
        <ul className="topList">
          <li className="topListItems">
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/register" className=" link">
              REGISTER
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
