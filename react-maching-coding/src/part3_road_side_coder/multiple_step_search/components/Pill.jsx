import React from "react";
import "./Pill.css";
const Pill = ({ email, onClick }) => {
  // const {email, onHandleRemoveUser} = user;
  return (
    <span className="pill">
      <span>{email}</span>
      <span className="pill__close" onClick={onClick}>
        X
      </span>
    </span>
  );
};

export default Pill;
