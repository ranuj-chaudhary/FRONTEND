/*

fill(value)
fill(value, start)
fill(value, start, end)

*/

Array.prototype.fill = function (value, start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + end;
  }

  for (let i = start; i < end; i++) {
    this[i] = value;
  }

  return this;
};
