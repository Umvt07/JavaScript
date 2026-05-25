// const tinder =new Object()// so its an singleton object
const tinderuser={};
tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isloggedin=false;

// console.log(tinderuser);
const obj2={
    email: "sharmaadarsh10534",
    fullname:{
        userfullname:{
            firstname:"Adarsh",
            lastname:"Sharma"
        }
    }
}
// console.log(obj2.fullname.userfullname.firstname);

// object combine
const obk2={1:"a",2:"b"}
const obk3={3:"c",4:"d"}
// const obk4={obk2,obk3}; // same array issue not merging its object of two object inside it
// console.log(obk4);

// const obk5=Object.assign(obk2,obk3); // so basically all things of obk3 is in obk2 and returns an object also which get stored in obk5
// console.log(obk5);
// console.log(obk2);
// // so better practice is
// // insert everything in an empty object 
// const obk6=Object.assign({},obk2,obk3);
// console.log(obk6);
// // so now obk2 and obk3 stays same and everything is inserted in obk6

// /// so one more method is spreading 
// const obk7={...obk2,...obk3};
// console.log(obk7);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    },
]
console.log(users[0].email);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedin'));

// Object methods in JavaScript


// 1. Access object property
console.log(tinderUser.email);

// Output:
// "abc@gmail.com"


// 2. Object.keys(obj)
// Returns all keys of object in array form

console.log(Object.keys(tinderUser));

// Output:
// ["id", "name", "email", "isLoggedIn"]


// 3. Object.values(obj)
// Returns all values of object in array form

console.log(Object.values(tinderUser));

// Output:
// [1, "Adarsh", "abc@gmail.com", false]


// 4. Object.entries(obj)
// Converts object into array of [key, value] pairs

console.log(Object.entries(tinderUser));

// Output:
// [
//   ["id", 1],
//   ["name", "Adarsh"],
//   ["email", "abc@gmail.com"],
//   ["isLoggedIn", false]
// ]


// 5. hasOwnProperty(key)
// Checks whether object contains that property or not

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser.hasOwnProperty("age")); // false


// Quick memory trick:

// Object.keys()    -> only keys
// Object.values()  -> only values
// Object.entries() -> key-value pairs
// hasOwnProperty() -> property exists or not