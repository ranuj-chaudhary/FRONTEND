const arr = [1, 2, 3, 4, 5, 6];

function myCustomMap(callback) {
  if (!callback) {
    throw Error(`${callback} is not a function`);
  }
  let newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray[index] = callback(this[index], index, arr);
  }
  return newArray;
}

Array.prototype.myMap = myCustomMap;

const squares = arr.myMap((ele, index, arr) => {
  return ele * ele;
});

console.log(squares);
