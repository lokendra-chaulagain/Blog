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

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        onClick={changeTheme} //dark mode
        inputProps={{ "aria-label": "controlled" }}
      />
     
    </div>
  );
}

export default ToggleButton;
