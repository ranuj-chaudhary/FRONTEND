import React, { useEffect, useState } from 'react';
import { handlePasswordStrength } from './utils';
const style = {
  'low': 'text-red-500',
  'medium': 'text-yellow-500',
  'strong': 'text-orange-500',
  'very strong': 'text-blue-500',
  'unbreacadable': 'text-green-500',
};
const PasswordStrength = ({ passwordLength }) => {
  const [passwordStrength, setPasswordStrength] = useState('');
  
  useEffect(() => {
    setPasswordStrength(handlePasswordStrength(passwordLength));
  }, [passwordLength]);

  return (
    <div className="password__strength flex justify-between my-2">
      <span>Strength</span>
      <span className={style[passwordStrength]}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrength;
