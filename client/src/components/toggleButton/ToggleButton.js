import React, { useContext } from "react";
import "./toggleButton.scss";
import Switch from "@mui/material/Switch";
import { DarkModeContext } from "../../darkModeContext/darkModeContext";

function ToggleButton() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //Dark mode
  const { dispatch } = useContext(DarkModeContext);
  const changeTheme = () => {
    dispatch({ type: "TOGGLE" });
  };

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="toggleBut">
      {/* <p>dark</p> */}
      {darkMode ? "" : <p>Dark</p>}
      <Switch
        checked={checked}
        onChange={handleChange}
        onClick={changeTheme} //dark mode
        inputProps={{ "aria-label": "controlled" }}
      />
      {darkMode ? <p>Light</p> : ""}
    </div>
  );
}

export default ToggleButton;
