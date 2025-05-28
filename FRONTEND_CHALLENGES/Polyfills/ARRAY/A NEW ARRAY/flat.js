//  Recursive way

const data = [
  [1, 2, 3, 4, 5],
  [6, 7, [3, [4, 5, 6]]],
  5,
  'str',
  { name: 'ranuj' },
];

Array.prototype.myFlat = function (depth) {
    if(!Number.isInteger(depth) || depth < 0){
        return this;
    }
  const arr = this;

  const result = [];

  function flat(arr, depth) {
    if(depth === 0) {
        result.push(...arr);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i], depth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  }
  flat(arr, depth);
  return result;
};
console.log(data.myFlat(1));

//  Iterative way

Array.prototype.myFlatInterative = function () {
  const arr = [...this];
  const result = [];
  let stack = [...arr];
  while (stack.length > 0) {
    const poppedElement = stack.pop();
    if (Array.isArray(poppedElement)) {
      stack = [...stack, ...poppedElement];
    } else {
      result.push(poppedElement);
    }
  }
  return result.reverse();
};

console.log(data.myFlatInterative());
