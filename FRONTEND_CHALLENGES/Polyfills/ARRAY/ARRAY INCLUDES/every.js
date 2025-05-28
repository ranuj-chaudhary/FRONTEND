/*
every(callbackFn)
every(callbackFn, thisArg)

SATIFIES RETURNS: true (every element in the array passes the test implemented by the provided function)
NOT FOUND RETURNS: false (at least one element in the array does not pass the test implemented by the provided function)
*/


const arr = [17, 18, 15, 16, 19];

function myCustomEvery(cb) {
  let status = false;
  for (let index = 0; index < this.length; index++) {
    status = cb(this[index], index, this);
    if (!status) {
      return false;
    }
  }
  return true;
}

Array.prototype.myEvery = myCustomEvery;

let age = 15;
const isValidAge = arr.myEvery((ele) => age > ele);
console.log(isValidAge);
