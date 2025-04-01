import React from 'react';
import { MAX_PASS_LENGTH, MIN_PASS_LENGTH } from './utils/constants';
const PasswordLength = ({ passwordLength, onChangePasswordLength }) => {
  return (
    <div className="password-length my-4">
      <label htmlFor="passwordLength" className="flex justify-between">
        <span>Password Length :</span> <span>{passwordLength}</span>
      </label>
      <input
        type="range"
        className="w-full my-4"
        value={passwordLength}
        min={MIN_PASS_LENGTH}
        max={MAX_PASS_LENGTH}
        onChange={onChangePasswordLength}
        id="passwordLength"
        required
      />
    </div>
  );
};

export default PasswordLength;
