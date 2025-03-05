const heading = document.querySelector('.heading');
heading.textContent = 'Promise Any';

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

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error('TypeError: undefined is not iterable'));
      return;
    } else if (promises.length === 0) {
      reject(new Error('AggregateError: All promises were rejected'));
    }
    const n = promises.length;
    const rejected = [];
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        if (res) {
          resolve(res);
          return;
        }
      } catch (err) {
        rejected[index] = err;

        if (rejected.length === n && index === n - 1) {
          reject(new Error('AggregateError: All promises were rejected'));
          return;
        }
      }
    });
  });
};

Promise.myAny([
  secondPromise(),
  firstPromise(),
  secondPromise(),
  secondPromise(),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
