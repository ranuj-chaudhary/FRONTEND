export function generatePassword(charTypes, passwordLength) {
  const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+', // you can add more symbols
  };

  const charsIncluded = charTypes
    .filter((item) => item.checked)
    .map((item) => characters[item.type])
    .join('');

  // generate password  
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charsIncluded.length);
    password += charsIncluded[randomIndex];
  }
  return password;
}

export function handlePasswordStrength(passwordLength, typesCount) {
  if (passwordLength <= 4) {
    return 'low';
  } else if (passwordLength > 5 && passwordLength <= 8) {
    return 'medium';
  } else if (passwordLength > 8 && passwordLength <= 16) {
    return 'strong';
  } else {
    return 'unbreacadable';
  }
}
