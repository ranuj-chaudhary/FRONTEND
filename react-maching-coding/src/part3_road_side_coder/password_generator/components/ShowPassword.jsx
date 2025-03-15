import React from "react";
import Button from "./Button";
import "./ShowPassword.css"
const ShowPassword = ({ password, onHandleCopy }) => {
  return (
    <div className="pass-generator__showpassword">
      <span className="pass-generator_password" >{password}</span>
      <Button onClick={onHandleCopy} title={"copy"} type={"small"}/>
    </div>
  );
};

export default ShowPassword;
