const heading = document.querySelector('.heading');
heading.textContent = "PromiseAll"

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

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error('undefined is not iterable'));
      return;
    }
    const n = promises.length;
    const results = [];
    if (n === 0) {
      resolve(results);
      return;
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        results[index] = res;
        if (index === n - 1) {
          resolve(results);
          return;
        }
      } catch (err) {
        reject(`Error: ${err}`);
        return;
      }
    });
  });
};

Promise.myAll([firstPromise(), thirdPromise()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
