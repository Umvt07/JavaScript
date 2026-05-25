// simple if else statement just like other programming language
// if(condition){
//     // code to execute if condition is true
// }else{
//     // code to execute if condition is false
// }

if(5<3){
    console.log("5 is greater than 3");
}
else{
    console.log("5 is not greater than 3");
}

//scope rule for if else is same as we have studied for function and block scope in previous videos
// basically var is global scope and function scope but let and const are block scope
if(true){
    var a=10;
    let b=20;
    const c=30;
}
console.log(a); // 10
// console.log(b); // error
// console.log(c); // error
//implicit scoope is same as we know in cp
if(true)console.log("Hello"); // if there is only one statement then we can write without curly bracket
