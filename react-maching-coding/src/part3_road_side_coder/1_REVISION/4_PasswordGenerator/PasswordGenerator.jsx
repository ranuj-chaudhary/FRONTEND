import React, { useEffect, useState } from 'react';
import { generatePassword } from './utils';
import { handlePasswordStrength } from './utils';
import ShowPassword from './ShowPassword';
import PasswordLength from './PasswordLength';
import Options from './Options';
import Error from './Error';
import PasswordStrength from './PasswordStrength';
import Button from './Button';
import { MIN_PASS_LENGTH } from './utils/constants';
const items = [
  { id: 1, type: 'lowercase', checked: false },
  { id: 2, type: 'uppercase', checked: false },
  { id: 3, type: 'numbers', checked: false },
  { id: 4, type: 'symbols', checked: false },
];

const PasswordGenerator = () => {
  const [charTypes, setCharTypes] = useState(items);
  const [passwordLength, setPasswordLength] = useState(MIN_PASS_LENGTH);
  const [password, setPassword] = useState('');
  const [erroMessage, setError] = useState('');

  const handleCharType = (id) => {
    const updatedCharTypes = charTypes.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCharTypes(updatedCharTypes);
  };

  function handleChangePasswordLength(e) {
    setPasswordLength(e.target.value);
  }

  function handleError() {
    setError('Select password length and alleast one checkbox');
  }
  
  function handleGeneratePassword(e) {
    // return if not single checkbox selected
    const isNotSelected = Object.values(charTypes)
      .map((item) => item.checked)
      .every((item) => item === false);
    if (isNotSelected || passwordLength === 0) {
      handleError();
      return;
    }

    let password = generatePassword(charTypes, passwordLength);

    setPassword(password);
  }

  useEffect(() => {
    setPassword('');
  }, [password.length]);

  return (
    <div className="password-generator m-4 w-[500px] min-w-96 bg-slate-800 text-white p-4 rounded-md">
      <ShowPassword password={password} />
      <PasswordLength
        passwordLength={passwordLength}
        onChangePasswordLength={handleChangePasswordLength}
      />
      <Options items={charTypes} handleCharType={handleCharType} />
      <Error error={erroMessage} setError={setError} />
      <PasswordStrength
        passwordLength={passwordLength}
        onClick={handleGeneratePassword}
      />
      <Button
        type={'large'}
        title={'Generate Password'}
        onClick={handleGeneratePassword}
      />
    </div>
  );
};

export default PasswordGenerator;
