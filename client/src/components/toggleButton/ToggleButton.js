import React, { useContext, useState } from "react";
import "./toggleButton.scss";
import Switch from "@mui/material/Switch";
import { DarkModeContext } from "../../darkModeContext/darkModeContext";

function ToggleButton() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //dark mode
  // const [darkMode, setDarkMode] = useState(true);
  const { dispatch } = useContext(DarkModeContext);
  const changeTheme = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        onClick={changeTheme}
        inputProps={{ "aria-label": "controlled" }}
      />
      ToggleButton
    </div>
  );
}

export default ToggleButton;
