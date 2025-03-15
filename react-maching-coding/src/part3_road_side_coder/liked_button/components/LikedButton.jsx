import React from "react";
import Loader from "./Loader";
import { FaRegHeart } from "react-icons/fa";
import "./LikedButton.css"
const LikedButton = ({ liked, onClick, isFetching, error }) => {
  return (
    <span>
      <button
        className={`like-btn ${liked ? "like-btn__liked" : ""}`}
        onClick={onClick}
        disabled={isFetching}
      >
        {isFetching ? <Loader /> : <FaRegHeart />}
        {liked ? "Liked" : "Like"}
      </button>
      <div className="error">{error.length > 0 ? error : ""}</div>
    </span>
  );
};

export default LikedButton;
