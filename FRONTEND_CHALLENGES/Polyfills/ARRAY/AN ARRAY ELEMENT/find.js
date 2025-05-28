
/*
find(callbackFn)
find(callbackFn, thisArg)

SATIFIES RETURNS: true
NOT FOUND RETURNS: undefined
*/

const arr = [1, 2, 3, 4, 5, 6];

function myCustomFind(callback) {
  for (let index = 0; index < this.length; index++) {
    let status = callback(this[index], index, arr);
    if (status) {
      return this[index];
    }
  }
}

Array.prototype.myFind = myCustomFind;

const findNoDivisibleByTwo = arr.myFind((ele, index, arr) => ele % 2 === 0);

console.log(findNoDivisibleByTwo);
