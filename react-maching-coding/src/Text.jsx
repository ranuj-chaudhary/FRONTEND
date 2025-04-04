import { useState, useRef, useEffect } from 'react';

export const OtpAutoLogin = ({ count = 4, onChange }) => {
  const [otp, setOtp] = useState(new Array(count).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef([]);
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return; // Ignore non-numeric input
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setCurrentIndex(index + 1);
    setOtp(newOtp);
  };

  function handleClick(index) {
    setCurrentIndex(index);
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setCurrentIndex(index - 1);
      setOtp(newOtp);
    } else if (e.key === 'ArrowLeft' && index > 0) {
      setCurrentIndex(index + 1);
    } else if (e.key === 'ArrowRight' && index < count - 1) {
      setCurrentIndex(index - 1);
    }
  }

  return (
    <div className="otp-container flex gap-2 justify-center items-center mt-10">
      {otp.map((data, index) => {
        return (
          <input
            className="border-2 border-gray-300 w-16 h-16 p-2 text-center text-4xl font-bold rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            maxLength="1"
            key={index}
            value={data}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onClick={() => handleClick(index)}
            ref={(el => inputRef.current[index] = el)}
            onFocus={() => {
              inputRef.current[index].select();
            }}
          />
        );
      })}
    </div>
  );
};
