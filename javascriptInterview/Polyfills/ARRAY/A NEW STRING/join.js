Array.prototype.join = function (separator = ',') {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      result += this[i];
    } else {
      result += this[i] + separator;
    }
  }

  return result;
};
const arr = ['a', 'b', 'c', 'd'];
const str = arr.join(' ');