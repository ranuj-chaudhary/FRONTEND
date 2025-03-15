import "./PasswordGenerator.css";
import React, { useEffect, useState } from "react";

// components
import ShowPassword from "./ShowPassword";
import PasswordLengthSlider from "./PasswordLengthSlider";
import Options from "./Options";
import ShowPasswordStrength from "./ShowPasswordStrength";
import Button from "./Button";
import { PASSWORD_MAX_LENGTH } from "../utils/constants";

const items = [
  { id: "123", type: "include uppercase letter", value: false },
  { id: "124", type: "include lowercase letter", value: false },
  { id: "125", type: "include symbols", value: false },
  { id: "126", type: "include numbers", value: false },
];

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passLen, setPassLen] = useState(0);
  const [checkOptions, setcheckOptions] = useState(items);

  useEffect(() => {
    setPassword("");
  }, [passLen]);

  function handleCopy() {
    // Get the text field
    let copyText = document.querySelector(".pass-generator_password");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);

    // Alert the copied text
    alert("Copied the text: " + copyText.innerText);
  }

  function handleOptionChange(id) {
    checkOptions.forEach((option) => {
      if (option.id === id) {
        option.value = !option.value;
      }
    });
    setcheckOptions([...checkOptions]);
  }

  function handleGeneratePassword() {
    let characters = "";
    function getCharByType(key) {
      switch (key) {
        case "include lowercase letter":
          return "abcdefghijklmnnopqrstuvwxyz";
        case "include uppercase letter":
          return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        case "include symbols":
          return "@#$!&*?";
        case "include numbers":
          return "0123456789";
        default:
      }
    }

    checkOptions.forEach((option) => {
      if (option.value === true) {
        characters += getCharByType(option.type);
      }
    });

    let generatedPass = "";

    for (let i = 0; i < passLen; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      console.log(randomIndex);
      generatedPass += characters[randomIndex];
    }

    setPassword(generatedPass);
  }
  return (
    <div className="pass-generator">
      <ShowPassword password={password} onHandleCopy={handleCopy} />
      <PasswordLengthSlider
        setState={setPassLen}
        state={passLen}
        title={"Character Length"}
        min={0}
        max={PASSWORD_MAX_LENGTH}
      />
      <Options items={checkOptions} onOptionChange={handleOptionChange} />
      <ShowPasswordStrength passLen={passLen} password={password} />
      <Button
        type={"large"}
        title="Generate Password"
        onClick={handleGeneratePassword}
      />
    </div>
  );
};

export default PasswordGenerator;
