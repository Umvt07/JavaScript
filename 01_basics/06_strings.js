// in js string can be represented in double and single quotes
const name="Adarsh"
const repo=34
// console.log(name + repo + " Value")

// bettwe way of above sentence

console.log(`hello bro my name is ${name} and i have repo count of ${repo}`)
// modern way to do things which is known as string interpolation

const gamename=new String('Sharma')
// console.log(gamename)
// console.log(gamename[0])
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(5));
// console.log(gamename.indexOf('a'))

const neww=gamename.substring(0,4);
console.log(neww);

// -ve means in slice() start counting from the end of the array
// dont count from the start

// slice(start, end)

// Negative index means counting from end.
// Formula:
// negative_index = string.length + negative_value

// Example:
let str = "Adarsh"; // length = 6

str.slice(-4, 4)

// -4 => 6 + (-4) = 2
// so it becomes:
str.slice(2, 4)

// index 2 to 3 (4 not included)
// Output: "ar"

// substring() does NOT support negative indexes.

// If you give a negative value,
// JavaScript treats it as 0.

// let str = "Adarsh";

// console.log(str.substring(-4, 4)); // "Adar"
// // 1. Negative indexes
// // slice() supports negative indexes
// "Adarsh".slice(-3)      // "rsh"

// // substring() does NOT support negative indexes
// // negative values become 0
// "Adarsh".substring(-3)  // "Adarsh"


// // 2. If start > end
// // slice() returns empty string
// "Adarsh".slice(4, 2)      // ""

// // substring() swaps them automatically
// "Adarsh".substring(4, 2)  // "ar"


// 3. End index
// In both, end index is NOT included



// .trim()-> this removes the extra space 
let strr="    shff   ";
console.log(strr);
console.log(strr.trim()); 

const url="https://Sharmaji%29.com";
console.log(url.replace('%29','-'));
console.log(url.includes("Sharma"));  // case sensitive

// split seperates the string about some symbol

console.log(url.split("t",1));
// split("seperator",limit);
// can only work with seperator also 
// returns the splitted value and the limit is no. of splitted part you need

// 1) slice(start, end)
// Get part of a string

// 2) substring(start, end)
// Like slice, but no negative index

// 3) split(separator, limit)
// Convert string to array

// 4) replace(searchValue, newValue)
// Replace first match

// 5) replaceAll(searchValue, newValue)
// Replace all matches

// 6) includes(searchString)
// Check if text exists

// 7) startsWith(searchString)
// Check beginning

// 8) endsWith(searchString)
// Check ending

// 9) indexOf(searchString)
// Find first position

// 10) lastIndexOf(searchString)
// Find last position

// 11) trim()
// Remove spaces from both sides

// 12) toLowerCase()
// Convert to lowercase

// 13) toUpperCase()
// Convert to uppercase

// 14) charAt(index)
// Get one character

// 15) padStart(targetLength, padString)
// Add chars at start

// 16) padEnd(targetLength, padString)
// Add chars at end


// Prototype = object inheritance in JavaScript

// If object doesn't have a property/method,
// JavaScript looks in its prototype.

// Example:
// Array.prototype
// String.prototype
// Object.prototype

// in trim there are things such as trim start or trim end which trims the starting
// or the end part of the string respectively
// substring(start, end) -> uses indexes
// substr(start, length) -> uses length (deprecated)

let newlearn="India";
console.log(newlearn.substring(2,3));
console.log(newlearn.substr(2,3));