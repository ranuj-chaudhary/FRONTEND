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