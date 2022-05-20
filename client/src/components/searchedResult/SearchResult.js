import React from "react";
import "./searchResult.scss";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

function SearchResult({ data }) {
  console.log(data);

  return data.map((item, index) => (
    <Link to={`/post/${item._id}`} className="link">
      <div className="searchResultPost">
        <img className="srPostImg" src="" alt="" />
        <span className="srPostTitle">{data[index].username}</span>
        <div className="srPostCats">
          <span>sports</span>
        </div>

        <div className="srTimeLocationRow">
          <span className="srPostTime">{format(data[index].createdAt)}</span>
          <i className="srLocationIcon fa-solid fa-location-dot"></i>
          <span className="srLocationText">{data[index].location}</span>
          <p className="srPostDescription">{data[index].desc}</p>
        </div>
      </div>
    </Link>
  ));
}

export default SearchResult;

