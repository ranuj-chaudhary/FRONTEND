export const validateUser = function (username, password) {
  let isAuthenticated = false;
  const user = {
    username: 'ranujchoudhary',
    password: 'ranuj@1234',
  };

  if (username === user.username && password === user.password) {
    isAuthenticated = true;
  }
  return new Promise((resolve, reject) => {
    if (isAuthenticated) {
      resolve({ isAuthenticated });
    } else {
      reject('Authentication failed');
    }
  });
};
