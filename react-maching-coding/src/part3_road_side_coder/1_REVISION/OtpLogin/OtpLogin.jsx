import React, { useEffect } from 'react';
import Button from './Button';

const OtpLogin = ({ length = 4, onOtpSubmit = () => {}, error }) => {
  const [otp, setOtp] = React.useState(new Array(length).fill(''));
  const inputRef = React.useRef([]);

  function handleChange(e, index) {
    const { value } = e.target;

    // Allow only numbers and limit to 1 character
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(-1); // Get the last character if more than 1 digit is entered
    setOtp(newOtp);

    if (value && inputRef.current[index + 1] && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  }

  function handleClick(e, index) {
    // focus on the input field when clicked
    if (inputRef.current[index]) {
      inputRef.current[index].setSelectionRange(0, 1);
    }
    const startingIndex = otp.indexOf('');

    if (startingIndex !== -1 && startingIndex < index) {
      if (startingIndex !== -1 && inputRef.current[startingIndex]) {
        inputRef.current[startingIndex].focus();
      }
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Enter') return;
    // on each key press input changes which changes the otp state

    if (
      e.key === 'Backspace' &&
      index > 0 &&
      !otp[index] &&
      inputRef.current[index - 1]
    ) {
      // focus on the previous input field if the current one is empty

      inputRef.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRef.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRef.current[index - 1].focus();
    } else if (e.key === 'Enter' && otp.every((ele) => ele !== '')) {
      // Call the onOtpSubmit function with the OTP value when Enter is pressed
    }
  }

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  return (
    <div className="otp-container flex flex-col gap-2 justify-center items-center mt-10">
      <p className="text-2xl ">Enter Otp Sent on</p>
      <div className="input flex gap-2">
        {otp.map((data, index) => {
          return (
            <input
              className="border-2 border-gray-300 w-24 h-16 p-2 text-center text-4xl font-bold rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={(e) => handleClick(e, index)}
              ref={(el) => (inputRef.current[index] = el)}
              onFocus={() => {
                inputRef.current[index].select();
              }}
            />
          );
        })}
      </div>
      <Button
        type="submit"
        onClick={(e) => onOtpSubmit(e, otp)}
        className={`${
          otp.every((ele) => ele !== '') ? '' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Submit{' '}
      </Button>
      <p className="text-red-500 text-center mt-2">
        {error.length > 0 ? error : ''}
      </p>
    </div>
  );
};

export default OtpLogin;
