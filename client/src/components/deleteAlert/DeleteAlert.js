import axios from "axios";
import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./deleteAlert.scss";

function DeleteAlert() {
  const { user } = useContext(Context);
  //delete user
  const [deleteUser, setDeleteUser] = React.useState(false);

  const handleDelete = async() => {
    const res =await axios.delete(`/users/delete/${user._id}`);
    localStorage.clear();
    console.log("This user has been deleted" + res);
    
    window.location.replace("/login");

  };

  return (
    <div className="deleteContainer">
      <span className="areYouSure">Are you sure ?</span>
      <div className="nuYesRow">
        <button className="nuNoBtn">No</button>
        <button className="nuYesBtn" onClick={handleDelete}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeleteAlert;
