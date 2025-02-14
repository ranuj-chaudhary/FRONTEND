export async function encryptData(data) {
    let hashedValue = '';
    for (let i = 0; i < data.length; i++) {
      hashedValue += data.charCodeAt(i);
    }
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(hashedValue);
      }, 500);
    });
  }