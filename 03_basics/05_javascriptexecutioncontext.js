// suppose we have the code like this
console.log("Adarsh");
let a=10;
let b=20;
function addtwo(num1,num2){
    return num1+num2;
}
let t1=10;
let t2=20;
console.log(addtwo(t1,t2))

// so now baiscally here 
// let us understand the execution of java program
// in this the execution is in two phase
// 1-> memeory phase 2-> execution phase
// in memory phase only the allocation of memory takes place and in execution phase
// the acutal execution takes place
// like here 
// memory phase
//a=undefined
//b=undefined
//addtwo->defined
//t1-> undefined
//t2->undefined
// now in execution phase actual execution takes place
// a=10
// b=20';
//t1=10;
//t2=20;
// now when the function is being called then there will one another execution will take place 
// basically a new variable environment and execution thread and then the execution
// of that function will take place

// so summarizing nve+executon threa is divided into two parts -> 1-> memeory phase
// 2-> execution phase

// now call stack
// so befor anything inside the stack global stack always reside
// after that function call starts hapenning
// one() then two() and then three() basically hows the code is begin written follows lifo



//chat gpt for details one

// ================= JAVASCRIPT EXECUTION CONTEXT + CALL STACK =================
//
// Whenever a JavaScript program runs, JS engine executes the code
// using something called Execution Context.
//
// Execution Context = the environment in which JavaScript code runs.
//
// -----------------------------------------------------------------------------
// TYPES OF EXECUTION CONTEXT
// -----------------------------------------------------------------------------
//
// 1) Global Execution Context (GEC)
//    -> This is created first whenever JS program starts.
//    -> It is created for the whole file/script.
//
//    In browser:
//    this -> window object
//
//    In Node.js:
//    this -> global object
//
//    Important:
//    Before executing any code, JavaScript ALWAYS creates
//    the Global Execution Context first.
//
// -----------------------------------------------------------------------------
// HOW JAVASCRIPT EXECUTES CODE?
// -----------------------------------------------------------------------------
//
// JavaScript executes code in mainly 2 phases:
//
// 1) Memory Creation Phase (also called Creation Phase)
// 2) Execution Phase
//
// -----------------------------------------------------------------------------
// EXAMPLE
// -----------------------------------------------------------------------------

console.log("Adarsh");

let a = 10;
let b = 20;

function addTwo(num1, num2){
    return num1 + num2;
}

let t1 = 10;
let t2 = 20;

console.log(addTwo(t1, t2));


// ============================================================================
// PHASE 1 -> MEMORY CREATION PHASE
// ============================================================================
//
// In this phase JavaScript scans the whole code first
// and allocates memory to variables and functions.
//
// RULES:
//
// Variables:
//
// var x;
// x -> undefined
//
// let x;
// x -> memory reserved but not initialized
//      (it stays in TDZ = Temporal Dead Zone)
//
// const x;
// x -> memory reserved but not initialized
//      (also in TDZ)
//
//
// Functions:
//
// Full function definition gets stored.
//
// Example for above code:
//
// a -> uninitialized (TDZ)
// b -> uninitialized (TDZ)
//
// addTwo -> complete function definition
//
// t1 -> uninitialized (TDZ)
// t2 -> uninitialized (TDZ)
//
//
// Memory phase looks conceptually like:
//
// a      -> <empty / TDZ>
// b      -> <empty / TDZ>
// addTwo -> function definition
// t1     -> <empty / TDZ>
// t2     -> <empty / TDZ>
//
// Note:
// No actual execution happens here.
// Only memory allocation happens.


// ============================================================================
// PHASE 2 -> EXECUTION PHASE
// ============================================================================
//
// Now JavaScript starts executing line by line.
//
// Step 1:
//
// console.log("Adarsh");
//
// Output:
// Adarsh
//
//
// Step 2:
//
// a = 10
//
// Step 3:
//
// b = 20
//
//
// Step 4:
//
// function definition was already stored,
// so nothing special happens here.
//
//
// Step 5:
//
// t1 = 10
//
// Step 6:
//
// t2 = 20
//
//
// Step 7:
//
// addTwo(t1, t2)
//
// Here function gets called.
//
// When a function is called,
// JavaScript creates a NEW EXECUTION CONTEXT
// for that function.


// ============================================================================
// FUNCTION EXECUTION CONTEXT
// ============================================================================
//
// Every function call creates:
//
// 1) New Variable Environment
// 2) New Execution Thread
//
// Together they form a new Execution Context.
//
// And this function context also has:
//
// 1) Memory Phase
// 2) Execution Phase
//
// Example:
//
// addTwo(10, 20)
//
//
// ---------------------
// FUNCTION MEMORY PHASE
// ---------------------
//
// num1 -> undefined
// num2 -> undefined
//
//
// ---------------------
// FUNCTION EXECUTION PHASE
// ---------------------
//
// num1 = 10
// num2 = 20
//
// return num1 + num2
//
// return 30
//
//
// After function completes:
//
// This function execution context gets deleted.


// ============================================================================
// CALL STACK
// ============================================================================
//
// JavaScript uses CALL STACK to manage execution contexts.
//
// Call Stack follows:
//
// LIFO = Last In First Out
//
// Meaning:
//
// Jo sabse last me aayega,
// woh sabse pehle bahar jayega.
//
// -----------------------------------------------------------------------------
// EXAMPLE
// -----------------------------------------------------------------------------

function one(){
    two();
}

function two(){
    three();
}

function three(){
    console.log("Inside three");
}

one();


// -----------------------------------------------------------------------------
// HOW STACK WORKS?
// -----------------------------------------------------------------------------
//
// Initially:
//
// | Global Execution Context |
//
//
// When one() is called:
//
// | one()   |
// | Global  |
//
//
// Inside one(), two() is called:
//
// | two()   |
// | one()   |
// | Global  |
//
//
// Inside two(), three() is called:
//
// | three() |
// | two()   |
// | one()   |
// | Global  |
//
//
// three() finishes:
//
// | two()   |
// | one()   |
// | Global  |
//
//
// two() finishes:
//
// | one()   |
// | Global  |
//
//
// one() finishes:
//
// | Global  |
//
//
//
// So call stack follows:
//
// PUSH -> when function is called
// POP  -> when function finishes


// ============================================================================
// IMPORTANT INTERVIEW POINTS
// ============================================================================
//
// Q1. Is JavaScript single threaded?
//
// Yes.
//
// It executes one task at a time.
//
//
//
// Q2. Is JavaScript synchronous?
//
// Yes, by default.
//
// It executes line by line.
//
//
//
// Q3. Every function call creates what?
//
// A new Execution Context.
//
//
//
// Q4. Who manages all execution contexts?
//
// Call Stack.
//
//
//
// Q5. What does stack follow?
//
// LIFO = Last In First Out.


// ============================================================================
// COMPLETE FLOW
// ============================================================================
//
// JavaScript file starts
//          ↓
// Global Execution Context created
//          ↓
// Memory Creation Phase
//          ↓
// Execution Phase
//          ↓
// Function called?
//          ↓
// New Function Execution Context created
//          ↓
// Pushed into Call Stack
//          ↓
// Function finishes
//          ↓
// Removed from Call Stack
//
// ============================================================================