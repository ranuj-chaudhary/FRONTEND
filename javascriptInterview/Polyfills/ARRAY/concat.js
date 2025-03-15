const data = [1, 2, 3];
const str = 'str';
const num = 4;
const func = function () {};
const prices = [1, 2, 3];
const isExist = true;

Array.prototype.myConcat = function () {
  let arr = [...this];
  let inputArrays = arguments;
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      arr = [...arr, ...arguments[i]];
    } else {
      arr.push(arguments[i]);
    }
  }
  return arr;
};
