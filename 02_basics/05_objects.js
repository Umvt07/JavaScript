// ===============================
// OBJECT DESTRUCTURING IN JAVASCRIPT
// ===============================

// Object destructuring means:
// Extract values from an object directly into variables.


// Example object:
const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh"
};


// ---------------------------------
// 1. Normal way (without destructuring)
// ---------------------------------

console.log(course.courseInstructor);

// Problem:
// If you use course.courseInstructor many times,
// code becomes longer.


// ---------------------------------
// 2. Using destructuring
// ---------------------------------

const { courseInstructor } = course;

console.log(courseInstructor);

// Output:
// Hitesh

// Meaning:
// Take "courseInstructor" from course object
// and create a variable with same name.


// ---------------------------------
// 3. Rename while destructuring
// ---------------------------------

const { courseInstructor: instructor } = course;

console.log(instructor);

// Output:
// Hitesh

// Meaning:
// Take courseInstructor from object
// but store it in variable "instructor"


// ==========================================
// REAL WORLD USE (React props example)
// ==========================================

// Suppose props object is:
const props = {
    company: "Google",
    salary: 100
};


// Without destructuring:
function Navbar1(props){
    console.log(props.company);
}


// With destructuring:
function Navbar2({ company }){
    console.log(company);
}


// Meaning:
// Instead of writing props.company,
// directly extract company.


// Another example:
function Navbar3({ company, salary }){
    console.log(company);
    console.log(salary);
}


// Function call:
Navbar3({
    company: "Google",
    salary: 100
});


// ==========================================
// QUICK MEMORY TRICK
// ==========================================

// Object:
const user = {
    name: "Adarsh",
    age: 18
};


// Extract:
const { name } = user;

// Rename:
const { name: myName } = user;


// ==========================================
// SUMMARY
// ==========================================

// { key }          -> extract value
// { key: newName } -> extract + rename

// Used a lot in:
// React props
// APIs
// Backend responses
// Large objects



/// ***** API ******
// api-> some values come from backend how do you write
// earlier it used to come in xml structure->complicated
// now in json 
// json-> {
   //      }-> this is json 
