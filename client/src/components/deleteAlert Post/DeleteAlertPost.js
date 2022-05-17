import axios from "axios";
import { useLocation } from "react-router-dom";
import "./deleteAlertPost.scss";

function DeleteAlertPost() {
  //Delete Post
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const handlePostDelete = async () => {
    await axios.delete("/posts/delete/" + path);
    console.log("Post has been deleted");
    window.location.replace("/");
  };

  return (
    <div className="deleteContainer1">
      <span className="areYouSure1">Are you sure ?</span>
      <div className="nuYesRow1">
        <button className="nuNoBtn1">No</button>
        <button className="nuYesBtn1" onClick={handlePostDelete}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeleteAlertPost;
