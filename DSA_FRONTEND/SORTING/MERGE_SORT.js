const arr = [15,5,9,2,4,8,7,6,1,3,10,13,12,11]
/*
Time Complexity: O(n2)
Space Complexity: O(n)
*/
function mergeSort(arr){
    if(arr.length === 1) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right){
    let i = 0;
    let j = 0;
    let result = [];
    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i])
            i++
        }else {
            result.push(right[j])
            j++
        }
    }

    if(i < left.length){
        while(i < left.length){
            result.push(left[i])
            i++
        }
    }

    if(j < right.length){
        while(j < right.length){
            result.push(right[j])
            j++
        }
    }

    return result;
}

 mergeSort(arr)