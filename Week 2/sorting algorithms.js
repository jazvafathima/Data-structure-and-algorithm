// bubble sort
let arr=[5, 3, 8, 1, 2]

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            
            }
            
        }
    }
console.log(arr);

// Insertion Sort=================================================

let arr=[5, 3, 8, 1, 2];

for(i=1;i<arr.length;i++){
    let key=arr[i];
    let j=i-1;

    while(j>=0 && j>key){
        arr[j+1]=arr[j];
        j--;
    
    }
    arr[j+1]=key;
}
console.log(arr)


// selection sort================================================

let arr = [5, 3, 8, 1, 2];

for(let i=0;i<arr.length-1;i++){
    let min=i;

    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
    }
    let temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}
console.log(arr)


// quick sort===================================

function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
  
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort([6, 2, 9, 4, 1, 7]));



// mergeSort===========================================
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

console.log(mergeSort([5, 3, 8, 1, 2]));



// ======================================
Bubble     → COMPARE
Insertion  → INSERT
Selection  → SELECT
Quick      → PIVOT
Merge      → DIVIDE + MERGE
