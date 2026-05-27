// javascript has prototypal behaivour which means it keeps on finding the prototype till it couldnt like from child to parent and so on
//Array--->object---> null
// string---> object-->null
// so at the end js has all property from object 

function mutliplyby5(params) {
    return params*5;
}
mutliplyby5.power=2;
console.log(mutliplyby5(5));
console.log(mutliplyby5.power);
console.log(mutliplyby5.prototype);
// function is a function and also if we want we can make it work like object also
// as at the end everything belong to object that is why it is called prototypal inheritance
// like in function case it keep on going above till it find the power thing
// .prototype is => bydefault kuch context set hote hai toh yeh uss method ka this hai
// and we have to take the refrence to use it 
// so function---> object ---> nulll
// multiplyby5
//    ↓
// Function.prototype
//    ↓
// Object.prototype
//    ↓
// null

function  createuser(username,score) {
    this.username=username;
    this.score=score;
}
createuser.prototype.increment=function () {
    this.score++;
}
createuser.prototype.printme=function () {
    console.log(`score  is ${this.score}`);
}
const chai=new createuser('Adarsh',23); //with new keyword only it treate it like an object??
const helo=new createuser('sharma',234);
// you dont need to write chai.prototype.increment again and again just write
chai.increment();//it will manage due to  prototypal inheritance

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype
 property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments
 and this is bound to the newly created object. If no explicit return
 value is specified from the constructor, JavaScript 
assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/





/// chatgpt notes


// ================= PROTOTYPE NOTES =================

// JavaScript uses prototypal inheritance
// JS keeps searching properties upward in the prototype chain

// Example chain:
// Array -> Object -> null
// String -> Object -> null
// Function -> Function.prototype -> Object.prototype -> null


// ===================================================
// FUNCTIONS ARE ALSO OBJECTS
// ===================================================

function multiplyby5(num) {
    return num * 5;
}

// adding custom property to function
multiplyby5.power = 2;

console.log(multiplyby5(5)); // 25
console.log(multiplyby5.power); // 2


// function is also an object
// so we can store properties inside it



// ===================================================
// DIFFERENCE BETWEEN .prototype AND __proto__
// ===================================================

// function.prototype
// -> special object used when creating objects using "new"

// object.__proto__
// -> actual hidden reference to parent prototype



// ===================================================
// CONSTRUCTOR FUNCTION
// ===================================================

function createuser(username, score) {
    this.username = username;
    this.score = score;
}



// ===================================================
// ADDING METHODS USING PROTOTYPE
// ===================================================

// this method will be shared by all objects

createuser.prototype.increment = function () {
    this.score++;
}

createuser.prototype.printme = function () {
    console.log(`score is ${this.score}`);
}



// ===================================================
// WHY USE "new" KEYWORD
// ===================================================

// "new" does 4 things:

// 1. creates empty object {}
// 2. links object to prototype
// 3. binds "this" to new object
// 4. returns object automatically



// ===================================================
// OBJECT CREATION
// ===================================================

const chai = new createuser("Adarsh", 23);
const tea = new createuser("Sharma", 250);

console.log(chai);
console.log(tea);



// ===================================================
// HOW PROTOTYPAL INHERITANCE WORKS
// ===================================================

// chai.increment()

// JS first searches inside chai object

// chai
// {
//    username: "Adarsh",
//    score: 23
// }

// increment not found there

// then JS goes upward:

// chai.__proto__
// -> createuser.prototype

// there increment() is found



// ===================================================
// PROTOTYPE CHAIN
// ===================================================

// chai
//   ↓
// createuser.prototype
//   ↓
// Object.prototype
//   ↓
// null



// ===================================================
// USING METHODS
// ===================================================

chai.increment();

chai.printme();



// ===================================================
// WITHOUT "new"
// ===================================================

// const user = createuser("Adarsh", 23);

// function runs normally
// this may point to window/global object
// no object is returned

// so always use "new" with constructor functions



// ===================================================
// IMPORTANT SUMMARY
// ===================================================

// function.prototype
// -> blueprint/shared methods

// object.__proto__
// -> hidden link to parent prototype

// new keyword
// -> creates object + connects prototype + binds this