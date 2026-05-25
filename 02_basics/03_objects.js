// singleton construction of object via constructor is called singleton
// const obj2=Object.create();
// this above is called singleton

// object literals
const sym=Symbol("Key1");
const obj1={
    name: "Adarsh",
    [sym]:"My key 1", // without [] it is behaiving like a string not symbol
    // to act it like a symbol we have insert[] in between
    age: 18,
    email: "sharmaadarsh10534@gamil.com",
    sec: "A",
    "full name":"Adarsh Sharma"
};
// console.log(obj1.name);
// // . is not a good method to access the object as by . you cant access "full name" method of object
// console.log(obj1["name"]);
// console.log(obj1["full name"]);
// console.log(obj1[sym]);  // and here also sym in [] brackets because else it will get converted into string which is wrong

// obj1["email"]="Hehe"
// console.log(obj1.email);

// you can lock the value by freeze button 
// Object.freeze(obj1);
// obj1["email"]="Hehe33"
// console.log(obj1.email);
// console.log(obj1);
// adding functions in js
obj1.greeting=function(){
    console.log("HelloWorld");
}
obj1.greetingtwo=function(){
    console.log(`my name if ${this.name} and my age is ${this.age}` );
}
// console.log(obj1.greeting);// function refrence 
console.log(obj1.greeting());
console.log(obj1.greetingtwo());
