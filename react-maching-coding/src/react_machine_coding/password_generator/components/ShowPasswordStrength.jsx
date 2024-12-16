import React, { useEffect, useState } from "react";
import "./ShowPasswordStrength.css";
const ShowPasswordStrength = ({ passLen, password }) => {
  const [strength, setStrength] = useState("low");
  useEffect(() => {
    if (passLen <= 4) {
      setStrength("low");
    } else if (passLen > 5 && passLen <= 8) {
      setStrength("medium");
    } else if(passLen >8 && passLen <= 16) {
      setStrength("strong");
    } else {
      setStrength("unbreachable");
    }
  }, [passLen]);

  return (
    <div className="password-generator__strength">
      <span>Strength:</span>
      {password.length > 0 && <span >{strength}</span>}
    </div>
  );
};

export default ShowPasswordStrength;
