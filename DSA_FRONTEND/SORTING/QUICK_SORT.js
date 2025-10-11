const arr = [4, 5, 9, 8, 10, 12, 3, 2, 1, 7, 6, 11];

/*
Time Complexity: worst case (n2) and optimised case O(nlogn)
Space Complexity: O(1)
*/

function partition(arr,lb, ub){
    let start = lb;
    let end = ub;
    let pivot = arr[lb]
    while(start < end){
        while(arr[start] <= pivot && start <= ub){
            start++
        }
        while(arr[end] > pivot && end >= lb){
            end--
        }
        if(start < end){
            let temp = arr[end];
            arr[end] = arr[start]
            arr[start] = temp
        }
    }
    if(start > end){
        let temp = arr[end];
        arr[end] = pivot;
        arr[lb] = temp
    }

    return end;
}


function quickSort(arr,lb, ub){
    if(lb < ub){
        let loc = partition(arr, lb, ub);
        quickSort(arr, lb, loc - 1);
        quickSort(arr, loc + 1, ub)
     }
}
console.log(arr)
quickSort(arr, 0 , arr.length -1)

console.log(arr)