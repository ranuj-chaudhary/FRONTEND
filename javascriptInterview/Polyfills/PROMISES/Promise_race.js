const firstPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('first promise resolved');
    }, 3000);
  });
};

const secondPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Error: Second Promise Failed');
    }, 1500);
  });
};

const thirdPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('third promise resolved');
    }, 500);
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error('TypeError: undefined is not iterable'));
    }

    const n = promises.length;
    if (n === 0) {
      resolve('Promise resolved');
    }

    for (let i = 0; i < n; i++) {
      checkPromise(promises[i]);
    }

    async function checkPromise(promise) {
      try {
        const res = await promise;
        if (res) {
          resolve(res);
          return;
        }
      } catch (err) {
        reject(err);
        return;
      }
    }
  });
};

Promise.myRace([firstPromise(), thirdPromise(), secondPromise()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.race([firstPromise(), thirdPromise(), secondPromise()])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
