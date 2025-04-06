
/*
some(callbackFn)
some(callbackFn, thisArg)


SATIFIES RETURNS: true (If at least one element in the array passes the test implemented by the provided function)
NOT FOUND RETURNS: false (If no elements in the array pass the test implemented by the provided function)
*/



const arr = [17, 18, 15, 16, 19];

function myCustomSome(cb) {
  let status = false;
  for (let index = 0; index < this.length; index++) {
    status = cb(this[index], index, this);
    if (status) {
      return true;
    }
  }
  return false;
}

Array.prototype.mySome = myCustomSome;

let age = 22;
const isValidAge = arr.mySome((ele) => ele > age);
console.log(isValidAge)