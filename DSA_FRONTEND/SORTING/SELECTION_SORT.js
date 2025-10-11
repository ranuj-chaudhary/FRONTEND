

// INSERTION SORT
const arr = [4, 5, 9, 8, 10, 12, 3, 2, 1, 7, 6, 11];

/*
Time Complexity: O(n2)
Space Complexity: O(1)
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let temp = arr[lowest];
    arr[lowest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));