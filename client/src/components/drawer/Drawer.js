import React from "react";
import "./drawer.scss";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

function Drawer() {
  return (
    <div className="drawer">
       <ClearIcon className="drawerClearIcon" />
      <div className="dtopCenter">
        <ul className="dtopList">
          <li className="dtopListItems">
            <Link to="/" className=" link ">
              HOME
            </Link>
          </li>

          <li className="dtopListItems">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="dtopListItems">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="dtopListItems">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="dtopListItems">LOGOUT</li>
        </ul>
      </div>
     
    </div>
  );
}

export default Drawer;
