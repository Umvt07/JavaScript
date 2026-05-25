// ==================== JAVASCRIPT ITERATIONS / LOOPS ====================
//
// In JavaScript there are multiple ways to iterate:
//
// 1) for loop
// 2) while loop
// 3) do while loop
// 4) for...of loop
// 5) for...in loop
// 6) forEach loop
//
// In this lecture mainly these were discussed:
//
// 1) for...of
// 2) for...in
// 3) forEach
//
// ======================================================================
// 1. FOR...OF LOOP
// ======================================================================
//
// Used for iterating over ITERABLE objects.
//
// Iterable means objects that can be traversed one by one.
//
// Examples:
//
// Arrays
// Strings
// Maps
// Sets
//
// Syntax:
//
// for (const variable of object) {
//      code
// }
//
// variable -> current element
// object -> iterable object


// ----------------------------------------------------------------------
// FOR...OF WITH ARRAY
// ----------------------------------------------------------------------

const arr = [2, 3, 4, 5, 6];

for (const element of arr) {
    console.log(element);
}

// Output:
// 2
// 3
// 4
// 5
// 6


// Here:
//
// First iteration:
// element = 2
//
// Second iteration:
// element = 3
//
// and so on...


// ----------------------------------------------------------------------
// FOR...OF WITH STRING
// ----------------------------------------------------------------------

const name = "Adarsh";

for (const ch of name) {
    console.log(ch);
}

// Output:
// A
// d
// a
// r
// s
// h


// ======================================================================
// 2. MAP IN JAVASCRIPT
// ======================================================================
//
// Map stores key-value pairs.
//
// Similar to C++ map/unordered_map conceptually.
//
// Features:
//
// 1) Stores unique keys
// 2) Remembers insertion order
// 3) Can use any datatype as key


const map = new Map();

map.set("Adarsh", "Sharma");
map.set("Sharma", "Adarsh");

// Duplicate keys overwrite old value

map.set("Adarsh", "Updated");

// Final map:
//
// "Adarsh" -> "Updated"
// "Sharma" -> "Adarsh"

console.log(map);


// ----------------------------------------------------------------------
// ITERATING MAP USING FOR...OF
// ----------------------------------------------------------------------

for (const [key, value] of map) {
    console.log(key, value);
}

// Output:
//
// Adarsh Updated
// Sharma Adarsh


// Explanation:
//
// Every element of map is actually:
//
// [key, value]
//
// So destructuring is used:
//
// [key, value]


// ======================================================================
// OBJECTS
// ======================================================================

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
};


// ----------------------------------------------------------------------
// FOR...OF DOES NOT WORK ON NORMAL OBJECTS
// ----------------------------------------------------------------------

// This gives error:

// for (const [key, value] of myObject) {
//      console.log(key, value);
// }

// Reason:
//
// Normal objects are NOT iterable by default.


// ======================================================================
// 3. FOR...IN LOOP
// ======================================================================
//
// Mainly used for:
//
// Objects
//
// Syntax:
//
// for (const key in object) {
//      code
// }
//
// It gives KEYS.


for (const key in myObject) {
    console.log(key);
}

// Output:
//
// game1
// game2


// If values are needed:

for (const key in myObject) {
    console.log(myObject[key]);
}

// Output:
//
// NFS
// Spiderman


// Explanation:
//
// key = "game1"
//
// myObject[key] = myObject["game1"]
//
// = "NFS"



// ----------------------------------------------------------------------
// FOR...IN WITH ARRAY
// ----------------------------------------------------------------------

const nums = [10, 20, 30];

for (const index in nums) {
    console.log(index);
}

// Output:
//
// 0
// 1
// 2


// Important:
//
// for...in gives INDEX in arrays,
// not actual values.


for (const index in nums) {
    console.log(nums[index]);
}

// Output:
//
// 10
// 20
// 30



// ----------------------------------------------------------------------
// FOR...IN DOES NOT WORK PROPERLY WITH MAP
// ----------------------------------------------------------------------

// Map should be iterated using for...of,
// not for...in



// ======================================================================
// 4. forEach LOOP
// ======================================================================
//
// Used mainly with ARRAYS.
//
// Syntax:
//
// array.forEach(callbackFunction)
//
// callback function means:
//
// A function passed as argument to another function.
//
// Important:
//
// Callback functions usually don't have names.

const coding = [1, 2, 3, 4, 5];


// ----------------------------------------------------------------------
// METHOD 1: NORMAL FUNCTION
// ----------------------------------------------------------------------

coding.forEach(function(item) {
    console.log(item);
});

// Output:
//
// 1
// 2
// 3
// 4
// 5


// Here:
//
// item = current element


// ----------------------------------------------------------------------
// METHOD 2: ARROW FUNCTION
// ----------------------------------------------------------------------

coding.forEach((item) => {
    console.log(item);
});


// Same output


// ======================================================================
// PASSING FUNCTION REFERENCE
// ======================================================================
//
// We can also pass an already created function.


function printMe(value) {
    console.log(value);
}


// IMPORTANT:
//
// Pass function reference:
//
// printMe
//
// NOT:
//
// printMe()
//
// Because printMe() executes immediately.


coding.forEach(printMe);


// Output:
//
// 1
// 2
// 3
// 4
// 5



// ======================================================================
// MULTIPLE PARAMETERS IN forEach
// ======================================================================
//
// forEach can give:
//
// 1) item
// 2) index
// 3) complete array


coding.forEach(function(item, index, arr) {
    console.log(item, index, arr);
});


// Example first iteration:
//
// item = 1
// index = 0
// arr = [1,2,3,4,5]


// Output:
//
// 1 0 [1,2,3,4,5]
// 2 1 [1,2,3,4,5]
// ...


 
// ======================================================================
// ARRAY OF OBJECTS
// ======================================================================

const myCoding = [
    {
        languageName: "JavaScript",
        shortName: "JS"
    },

    {
        languageName: "C++",
        shortName: "CPP"
    },

    {
        languageName: "Python",
        shortName: "PY"
    }
];


// Accessing object properties:

myCoding.forEach(function(item) {
    console.log(item.languageName);
});

// Output:
//
// JavaScript
// C++
// Python



// Using arrow function:

myCoding.forEach((item) => {
    console.log(item.shortName);
});

// Output:
//
// JS
// CPP
// PY



// ======================================================================
// INTERVIEW DIFFERENCE
// ======================================================================
//
// for...of
//
// Gives VALUES
//
// Works on:
//
// Arrays
// Strings
// Maps
// Sets
//
//
// for...in
//
// Gives KEYS / INDEXES
//
// Works on:
//
// Objects
// Arrays
//
//
// forEach
//
// Gives direct access to elements
//
// Works mainly on:
//
// Arrays
//
// Also gives:
//
// item, index, entire array



// ======================================================================
// QUICK SUMMARY
// ======================================================================
//
// ARRAY:
//
// for...of     -> values
// for...in     -> indexes
// forEach      -> values
//
//
// OBJECT:
//
// for...of     -> not allowed
// for...in     -> keys
//
//
// MAP:
//
// for...of     -> works
// for...in     -> doesn't work properly
//
// ======================================================================