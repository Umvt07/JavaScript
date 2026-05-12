const arr1=[1,2,3,5,2,1];
const arr2=[2,3,4,6,7];
// arr2.push(arr1);
// console.log(arr2); // it will insert as array inside the array
// wont concatenate
const arr3=arr1.concat(arr2);
// console.log(arr3);// it returns as an array 
// so both the array will get concatenate

// so now spread operator 
const arr4=[...arr1,...arr2];
// console.log(arr4);

// flat of array
const arr5=[1,2,4,[23,4,5,6,5],[3,2,[3,4,5]]]
console.log(arr5.flat(Infinity));// so it will flat the array into one

console.log(Array.isArray("Adarsh"));
console.log(Array.from("Adarsh"));// converts any object type to array
console.log(Array.from({name:"Adarsh"}));
// Array.from() works with:
// 1. Iterable objects
// 2. Array-like objects (must have length)

// {name:"Adarsh"} -> no length -> []-> here length we are talking about is object length
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));