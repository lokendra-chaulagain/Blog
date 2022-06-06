import React from "react";
import SinglePost from "../../components/singlepost/SinglePost";
import TopBar from "../../components/topbar/TopBar";
import "./postRead.scss";

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
