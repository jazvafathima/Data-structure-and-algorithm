

// let arr = [10, 5, 25, 8, 40, 15];

// let large=-Infinity;

// for(let i=0;i<=arr.length;i++){
//     if(arr[i]>large){
//        let temp=large;
//        large=arr[i]
//     }
// }
// console.log(large)
// ================================================
// function findLargest(arr) {

//     let largest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//          if(arr[i]>largest){
//        let temp=largest;
//        largest=arr[i]
//     }
      

//     }

//     return largest;
// }

// console.log(findLargest([10, 5, 25, 8, 40, 15]));

// ==============================================
// function findSmallest(arr) {

//     let smallest = Infinity;

//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i]<smallest){
//             smallest=arr[i]
//         }

//     }

//     return smallest;
// }

// console.log(findSmallest([10, 5, 25, 8, 40, 15]))

// =====================================================
// function reverseArray(arr) {

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {

//          [arr[left], arr[right]] = [arr[right], arr[left]];

//         left++
//         right--
//     }

//     return arr;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));
// ===================================================

// function countEvenOdd(arr) {

//     let even = 0;
//     let odd = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2===0){
//             even+=1;
//         }else{
//             odd+=1;
//         }


//     }

//     console.log("Even:", even);
//     console.log("Odd:", odd);
// }

// countEvenOdd([1, 2, 3, 4, 5, 6, 8])

// ========================================================
// function arraySum(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         sum=sum+arr[i]

//     }

//     return sum;
// }

// console.log(arraySum([10, 20, 5, 15, 30]));

// ============================================================
// function findMissing(arr) {

// let atualsum=0;
// let n=arr.length+1;
// let sumofarry= n * (n + 1) / 2;

// for(let i=0;i<arr.length;i++){
//     atualsum=atualsum+arr[i];
// }
// let missingnum=sumofarry-atualsum;
// return missingnum;

// }
// console.log(findMissing([1, 2, 3, 5, 6]))

// ========================================================
// function duplicates(arr){
//     let duplicates=[]
    
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                  if (!duplicates.includes(arr[i])) {
//                     duplicates.push(arr[i])
//                 }
//             }
//         }
//     }
//     return duplicates
// }

// console.log(duplicates([1,2,3,3,3,4,4,5]))
