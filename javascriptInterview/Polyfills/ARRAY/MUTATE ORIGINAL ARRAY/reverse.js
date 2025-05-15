Array.prototype.reverse = function () {
  let length = this.length;
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  return this;
};
