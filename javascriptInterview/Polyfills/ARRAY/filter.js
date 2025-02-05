const arr = [1, 2, 3, 4, 5, 6];

function myCustomFilter(callback) {
  let newArray = [];
  for (let index = 0; index < this.length; index++) {
    let status = callback(this[index], index, arr);
    if(status){
        newArray.push(this[index])
    }
  }
  return newArray;
}

Array.prototype.myFilter = myCustomFilter;

const divisorOfTwo = arr.myFilter((ele, index, arr) =>  ele % 2 === 0);

console.log(divisorOfTwo);
