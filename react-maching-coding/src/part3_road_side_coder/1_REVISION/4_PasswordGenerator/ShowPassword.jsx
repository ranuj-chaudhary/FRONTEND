import React, { useEffect, useState } from 'react';

const ShowPassword = ({ password, onHandleCopy }) => {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(password);
    setCopied(true);
  }

  useEffect(() => {
    let timerId = '';

    if (copied) {
      timerId = setTimeout(() => {
        setCopied(false);
      }, 500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [copied]);
  return (
    <div className="password-generator__showpassword flex justify-between items-center relative">
      <span className="text-2xl">{password}</span>
      <button
        onClick={handleCopy}
        className="bg-green-800 px-2 py-1 rounded-md"
      >
        copy
      </button>
      {copied && (
        <span className=" absolute top-0 left-[50%] translate-x-[-50%] bg-green-700 px-4 py-2 transition-all scale-105">
          Copied Text
        </span>
      )}
    </div>
  );
};

export default ShowPassword;
