// #primitive

// 7 types : string,Number,Boolean,null,undefined,Symbol(to make the value unique),BIGInt

// Refrence type(NON-primitive)

// Arrays,objects,functions

const score=false
// javascript is dynamically typed language which means at runtime it automatically
//  declear which 
// data type you are using

const id=Symbol('123');
const ani=Symbol('123')
console.table([id,ani])
console.log(id===ani);
// they always return different or random value even for the same input
const bigNumber=12443338838484n
console.log(bigNumber);

const heros=["Shaktiman","naagraj","Doga"]; // array
let myobj={     // object
    name:"Adarsh",
    age:18,
}

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);

// non primtive type ka type of object hi aata hai
console.log(typeof myFunction);
// iska return function aaya which is an object function


/// summary
/// type of of all type/
// number-> number
//     string->string 
//     Boolean->Boolean;
//     null->Object
//     undefined->undefined
//     symbol->symbol;
//     BigInt->BigInt

// non primitive->
//     arrays->Object
//     function->function object
//     object->object