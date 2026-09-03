// function count(n){

//     if(n===0){
//         return;
//     }
    
//     count(n-1)
//     console.log(n);
// }
// count(5)

// ================================

// function facto(n){
//     if(n===1){
//         return 1;
//     }
//     return n*facto(n-1);
// }
// console.log(facto(5))

// =================================
// function reverse(str){
//     if(str.length<=1){
//         return str;
//     }
//     return reverse(str.slice(1))+str[0]
// }
// console.log(reverse("hello"))
====================================

// function power(base, n) {

//     if(n===0){
//         return 1
//     }

//     return base *power(base,n-1);

// }

// console.log(power(2, 3));
=======================================

// function isPalindrome(str) {

// if(str.length<=1){
//     return true;
// }

// if(str[0]!==str[str.length-1]){
//     return false;
// }else{
//     return isPalindrome(str.slice(1,-1))
// }

// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
==========================================
// function fibonacci(n) {

//     if(n===1){
//         return 1
//     }

//     if(n===0){
//         return 0
//     }

//     return fibonacci(n-1)+fibonacci(n-2);

// }

// console.log(fibonacci(5));

=========================================
function countDigits(n) {

    if(n===0){
        return 0;
    }

    return 1 + countDigits(Math.floor(n/10))
}

console.log(countDigits(12345));
============================
function sumOfDigits(n) {

    if(n===0){
        return 0;
    }

    return n%10 +sumOfDigits(Math.floor(n/10))

}

console.log(sumOfDigits(12345));
========================================================

function findLargest(arr) {

    if(arr.length===1){
        return arr[0]
    }

    return Math.max(arr[0],findLargest(arr.slice(1)))

}

console.log(findLargest([10, 25, 8, 40, 15]));
=================================================
// function countCharacters(str) {

//     if(str.length===0){
//         return 0
//     }


//  return 1+countCharacters(str.slice(1))

// }

// console.log(countCharacters("hello"));
==============================
function countCharacter(str, target) {

    if(str.length===0){
        return 0;
    }

    if(str[0]===target){
        return 1+countCharacter(str.slice(1),target)
    }else{
         return countCharacter(str.slice(1),target)
    }


}

console.log(countCharacter("banana", "a"));
