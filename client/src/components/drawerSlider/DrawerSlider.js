import React, { useState } from "react";
import "./drawerSlider.scss";
import HomeIcon from "@mui/icons-material/Home";
import ClearIcon from "@mui/icons-material/Clear";

function DrawerSlider() {
  const [slider, setSlider] = useState(true);
  //   const showSlider = () => {
  //     setSlider(!slider);
  //   };
  
  return (
    <div className="drawerSlider">
      <ClearIcon />

      <div className="drawerSliderWrapper">
        <div className="sliderItems" onClick={(e) => setSlider(!slider)}>
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Home</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Read Blogs</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Create Blogs</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">About</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Contact</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Profile</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Settings</span>
        </div>

        <div className="sliderItems">
          <HomeIcon className="sliderListIcons" />
          <span className="sliderListItem">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default DrawerSlider;
