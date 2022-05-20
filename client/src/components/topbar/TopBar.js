import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import HomeIcon from "@mui/icons-material/Home";
import ClearIcon from "@mui/icons-material/Clear";
import "./topBar.scss";
import ToggleButton from "../toggleButton/ToggleButton";
import LogoutIcon from "@mui/icons-material/Logout";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";

function TopBar({ setSearchresult }) {
  const { user } = useContext(Context);
  const currentUser = user;

  //Fetch user details
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`/users/get/${currentUser?._id}`);
      setUserDetails(res.data);
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

  //Toggle Sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSlider = () => {
    setSidebar(!sidebar);
  };

  //fetching all post to search
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios.get("/posts/getAll");
      setPosts(res.data);
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="topBarCon">
      <HorizontalSplitIcon className="barIcon" onClick={showSlider} />

      {/* slider ----------------------------------*/}
      {sidebar && (
        <div className="sideBar" onClick={showSlider}>
          <ClearIcon className="clearIcon" />
          <div className="drawerSliderWrapper">
            <Link to="/" className="link">
              <div className="sliderItems">
                <HomeIcon className="sliderListIcons" />
                <span className="sliderListItem">Home</span>
              </div>
            </Link>

            <Link to="/write" className="link">
              <div className="sliderItems">
                <DriveFileRenameOutlineIcon className="sliderListIcons" />
                <span className="sliderListItem">Create Blogs</span>
              </div>
            </Link>

            <Link to="/about" className="link">
              <div className="sliderItems">
                <InfoIcon className="sliderListIcons" />
                <span className="sliderListItem">About</span>
              </div>
            </Link>

            <Link to="/contact" className="link">
              <div className="sliderItems">
                <ContactMailIcon className="sliderListIcons" />
                <span className="sliderListItem">Contact</span>
              </div>
            </Link>

            <Link to="/setting" className="link">
              <div className="sliderItems">
                <AccountBoxIcon className="sliderListIcons" />
                <span className="sliderListItem">Profile</span>
              </div>
            </Link>

            <Link to="/setting" className="link">
              <div className="sliderItems">
                <SettingsIcon className="sliderListIcons" />
                <span className="sliderListItem">Settings</span>
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sliderItems">
                <LogoutIcon className="sliderListIcons" />
                <span className="sliderListItem" onClick={handleLogout}>
                  Logout
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
      {/*--------------------------------------------------- */}

      <div className="topLeft">
        <a href="https://www.facebook.com/">
          <i className=" topIcon fa-brands fa-facebook-square"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className=" topIcon fa-brands fa-twitter-square"></i>
        </a>
        <a href="https://www.pinterest.com">
          <i className=" topIcon fa-brands fa-pinterest-square"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className=" topIcon fa-brands fa-instagram-square"></i>
        </a>

        <div className="searchCon">
          <input
            className="searchInput"
            type="text"
            placeholder="Type keyword eg:api"
            onChange={(e) => setSearchresult(e.target.value)}
          />
          <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {/* <div className="searchCon">
        <input
          className="searchInput"
          type="text"
          placeholder="Type keyword eg:api"
          onChange={(e) => setSearchresult(e.target.value)}
        />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div> */}

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
        </ul>
      </div>
      <ToggleButton className="modeToggle" />

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
