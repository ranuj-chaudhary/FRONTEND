const arr = [1, 2, 3, 4, 5, 6];

// 1) Create forEachMethodPolyfill
function forEachMethodPolyfill(cb) {
  for (let index = 0; index < this.length; index++) {
    cb(this[index], index, this);
  }
}

// 2) Assign the value to myForEach custom method for forEach
Array.prototype.myForEach = forEachMethodPolyfill;

//3) now any array can use this protype method due to protypical inheritance
arr.myForEach((ele, index, arr) => {
  console.log(ele, index, arr);
});
