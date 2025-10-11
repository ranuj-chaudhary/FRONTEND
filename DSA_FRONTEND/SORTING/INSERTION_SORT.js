// INSERTION SORT
const arr = [4, 5, 9, 8, 10, 12, 3, 2, 1, 7, 6, 11];

/*
Time Complexity: O(n2)
Space Complexity: O(1)
*/

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let currVal = arr[i]
    while(arr[j] > currVal && j >=0){
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = currVal;
    
  }
  console.log("selection sort")
  return arr;
}

console.log(insertionSort(arr));



