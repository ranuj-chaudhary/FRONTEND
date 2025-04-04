import React from 'react';
import OtpLogin from './OtpLogin';
import Button from './Button';
import { generateOtp } from './utils/utils';

const Login = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [currentOtp, setCurrentOtp] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState('');
  const validateInput = (value) => {
    return /^\d*$/.test(value);
  };

  const onOtpSubmit = (e, otp) => {
    e.preventDefault();
    // Reset error message on new OTP submission
    // Check if the OTP is valid and matches the generated OTPs
    setError('');
    const inputOtp = otp.join('');
    if (inputOtp === currentOtp) {
      setIsAuthenticated(true);
      console.log('Login successful!');
    } else {
      console.log('Invalid OTP. Please try again.');
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (validateInput(value) && value.length <= 10) {
      setMobileNumber(value);
    } else {
      console.log('Invalid input. Only numbers allowed.');
    }
  };

  function handleGenerateOtp() {
    // Generate OTP logic here

    if (mobileNumber.length >= 10) {
      const otp = generateOtp(6);
      setCurrentOtp(otp);
      setShowInput(true);
    }
  }
  console.log(currentOtp);
  console.log(error);
  return (
    <form className=" m-4 p-10 border-2 border-gray-400 rounded-md shadow-md mx-auto">
      {!showInput ? (
        <div className="input_mobile-number">
          <h1 className="text-3xl text-center">Login</h1>

          <div className=" flex flex-col gap-2 justify-center items-center mt-10">
            <label htmlFor="mobile__number" className="text-2xl text-center">
              Enter Mobile Number
            </label>
            <input
              id="mobile__number"
              type="text"
              className="border-2 border-gray-400 p-2 text-2xl"
              value={mobileNumber}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              placeholder="Enter Mobile Number"
              required
              autoComplete="off"
            />
            <Button
              className={`${
                mobileNumber.length < 10 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleGenerateOtp}
              disabled={mobileNumber.length < 10}
              error={error}
              type="button"
            >
              Generate Otp
            </Button>
          </div>
        </div>
      ) : !isAuthenticated ? (
        <OtpLogin
          length={6}
          mobileNumber={mobileNumber}
          onOtpSubmit={onOtpSubmit}
          error={error}
        />
      ) : (
        <div className="text-center text-2xl mt-10 text-green-600">
          Login Successful!
        </div>
      )}
    </form>
  );
};

export default Login;
