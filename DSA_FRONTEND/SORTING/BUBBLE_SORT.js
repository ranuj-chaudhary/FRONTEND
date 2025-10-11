// 1) BUBBLE SORT
const arr = [4,5,9,8,10,12,3,2,1,7,6,11];

/*
Time Complexity: O(n2)
Space Complexity: O(1)
*/

function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))