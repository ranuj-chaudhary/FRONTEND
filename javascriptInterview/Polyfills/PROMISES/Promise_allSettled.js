

const firstPromise = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('first promise resolved');
      }, 500);
    });
  };
  
  const secondPromise = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('second promise rejected');
      }, 500);
    });
  };
  
  const thirdPromise = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('third promise resolved');
      }, 500);
    });
  };
  
  Promise.myAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject(new Error('undefined is not iterable'));
        return;
      }
      const n = promises.length;
      if (n === 0) {
          resolve({ status: 'fullfiled', value: '' });
          return;
      }
      const results = [];
  
      promises.forEach(async (promise, index) => {
        try {
          const res = await promise; 
          results[index] = { status: 'fullfiled', value: res };
        } catch (err) {
          results[index] = { status: 'rejected', reason: err };
        }
  
        if (index === n - 1) {
          resolve(results);
        }
      });
    });
  };
  
  Promise.myAllSettled([firstPromise(), thirdPromise(), secondPromise()])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  