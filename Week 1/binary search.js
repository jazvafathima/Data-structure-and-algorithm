function firstOccurrence(arr, target) {

    let left = 0;
    let right = arr.length - 1;
    let answer = -1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            answer = mid;
             right = mid - 1;
            
        }
        else if (target > arr[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return answer;
}

function lastOccurrence(arr, target) {

    let left = 0;
    let right = arr.length - 1;
    let answer = -1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            answer = mid;
            left=mid+1;
        }
        else if (target > arr[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return answer;
}

function count(arr,target){
    let fi=firstOccurrence(arr, target)
    let la=lastOccurrence(arr, target)

    return la-fi+1;
}

console.log(
    count([1, 2, 2, 2, 2, 3, 4, 5], 2)
);
