const arr = [1, 2, 3, 4, 5, 6];

function myCutomReduce(callback, initialVal) {
  let accumulator = initialVal;
  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, arr);
  }
  return accumulator;
}

Array.prototype.myReduce = myCutomReduce;

const sum = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(sum);
