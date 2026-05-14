// ====================== MAP vs FILTER IN JAVASCRIPT ======================
//
// Both map() and filter() are array methods.
//
// Both are heavily used in JavaScript.
//
// But their purpose is completely different.
//
// ------------------------------------------------------------------------
// 1. FILTER()
// ------------------------------------------------------------------------
//
// filter() is used when we want to SELECT some elements
// based on a condition.
//
// It keeps only those elements for which
// the condition returns true.
//
// Syntax:
//
// array.filter(callbackFunction)
//
// Callback should return:
//
// true  -> keep element
// false -> remove element
const nums = [10, 15, 20, 25, 30];

const evenNumbers = nums.filter((num) => {
    return num % 2 == 0;
});

console.log(evenNumbers);

// Output:
//
// [10, 20, 30]


// ========================================================================
// 2. MAP()
// ========================================================================
//
// map() is used when we want to TRANSFORM
// every element into something else.
//
// It processes every element.
//
// Syntax:
//
// array.map(callbackFunction)
//
// Whatever callback returns,
// becomes the new element.
//
// ------------------------------------------------------------------------
// EXAMPLE 1
// ------------------------------------------------------------------------

const arr2 = [1, 2, 3, 4];

const doubled = arr2.map((num) => {
    return num * 2;
});

console.log(doubled);

// Output:
//
// [2, 4, 6, 8]


// Explanation:
//
// 1 -> 2
// 2 -> 4
// 3 -> 6
// 4 -> 8


// Important:
//
// map() usually keeps same array size.
//
// Original size = 4
//
// New size = 4

// ========================================================================
// ARRAY OF OBJECTS
// ========================================================================

const books = [

    {
        title: "Physics",
        genre: "Science"
    },

    {
        title: "Math",
        genre: "Education"
    },

    {
        title: "Chemistry",
        genre: "Science"
    }

];


// ------------------------------------------------------------------------
// USING FILTER
// ------------------------------------------------------------------------
//
// Select only science books

const scienceBooks = books.filter((book) => {
    return book.genre === "Science";
});

console.log(scienceBooks);

// Output:
//
// [
//   { title: "Physics", genre: "Science" },
//   { title: "Chemistry", genre: "Science" }
// ]


// Important:
//
// filter() returns FULL OBJECTS
//
// It does not return just title.


// ------------------------------------------------------------------------
// USING MAP
// ------------------------------------------------------------------------
//
// Extract only titles

const allTitles = books.map((book) => {
    return book.title;
});

console.log(allTitles);

// Output:
//
// ["Physics", "Math", "Chemistry"]


// Important:
//
// map() transforms each object
// into title only.


// ========================================================================
// USING BOTH TOGETHER
// ========================================================================
//
// Requirement:
//
// "Give me titles of science books"

const requiredBooks = books
    .filter((book) => {
        return book.genre === "Science";
    })
    .map((book) => {
        return book.title;
    });

console.log(requiredBooks);

// Output:
//
// ["Physics", "Chemistry"]


// Step 1:
//
// filter() keeps only science books
//
// [
//   { title: "Physics", genre: "Science" },
//   { title: "Chemistry", genre: "Science" }
// ]
//
//
// Step 2:
//
// map() extracts title
//
// ["Physics", "Chemistry"]


// ========================================================================
// IMPORTANT DIFFERENCE
// ========================================================================
//
// filter()
//
// Purpose:
// Select elements
//
// Returns:
// Matching elements only
//
// Size:
// Can decrease
//
//
// map()
//
// Purpose:
// Transform elements
//
// Returns:
// Modified elements
//
// Size:
// Usually same



// ========================================================================
// EASY MEMORY TRICK
// ========================================================================
//
// FILTER:
//
// Remove unwanted things
//
// Example:
//
// Student marks > 50
//
// Keep only passed students
//
//
//
// MAP:
//
// Transform data
//
// Example:
//
// Convert marks to grades
//
// 95 -> A
// 85 -> B
// etc.


// ========================================================================
// C++ THINKING
// ========================================================================
//
// FILTER:
//
// for(auto x : arr){
//     if(condition){
//         ans.push_back(x);
//     }
// }
//
//
//
// MAP:
//
// for(auto x : arr){
//     ans.push_back(modified_value);
// }
//
// ========================================================================



const arr=[1,2,3,4];
const newnums=arr.map((num)=>(num*10+1)).filter((num)=>(num>25));
console.log(newnums)