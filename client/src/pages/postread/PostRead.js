import React from "react";
import SinglePost from "../../components/singlepost/SinglePost";
import "./postRead.scss";
import TopBar from "../../components/topbar/TopBar";

function PostRead() {
  return (
    <>
      <TopBar />
      <div className="singlePage">
        <SinglePost />
      </div>
    </>
  );
}
export default PostRead;
