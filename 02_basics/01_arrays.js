const arr=[1,2,2,2,3,3,4,55]
// collection of multiple item,js array are resizable,can be of mix datatype
// array gives shallow copy which means 
//Shallow copy creates a new outer object, but nested objects still share references.
// deep copy->Create a completely independent copy of an object—including nested objects/arrays.
console.log(arr.length)
// arr.push(6);
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);
// // arr.unshift(9);
// // console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr.includes(2));
// console.log(arr.indexOf(99));
// console.log(arr.indexOf(55));
// const newarr=arr.join();// converts array to string
// console.log(typeof newarr);
// console.log(typeof arr);
// console.log( newarr);
// console.log(arr);

// slice() vs splice()

// 1. slice(start, end)
// - Extracts/copies elements
// - End index not included
// - Does NOT change original array
// - Supports negative indexes

let arr1 = [10, 20, 30, 40, 50];

// console.log(arr1.slice(1, 4)); // [20, 30, 40]
// console.log(arr1); // [10, 20, 30, 40, 50]


// 2. splice(start, deleteCount, items...)
// - Insert / delete / replace elements
// - Changes original array

let arr2 = [10, 20, 30, 40, 50];
// console.log(arr2.slice(-3,-1)); // basically -3+5-> -1+5;
// arr2.splice(1, 2); // delete 2 elements from index 1
// console.log(arr2); // [10, 40, 50]


// // Insert example:
// let arr3 = [10, 20, 30];

// arr3.splice(1, 0, 99); // insert 99 at index 1
// console.log(arr3); // [10, 99, 20, 30]

// // Replace 2 elements from index 1 with new values
// arr.splice(1, 2, 99, 100);
// // Explanation:
// // start = 1       -> start from index 1
// // deleteCount = 2 -> remove 20, 30
// // 99,100          -> insert new values
// // Quick memory trick:
// // slice  = copy/extract (original safe)
// // splice = modify/surgery (original changes)

