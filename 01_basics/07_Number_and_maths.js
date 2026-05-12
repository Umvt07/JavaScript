// // number and maths
// let score=100;
// console.log(score);
// const hey=new Number(100);
// console.log(hey);
// console.log(typeof hey);

// console.log(typeof hey);
// console.log(typeof score);
// // console.log(score.toString());
// console.log(typeof score);
// // console.log(score.toString);

// console.log(hey.toString()); by doing this you converted this to string
// and can use the property of string
// console.log(score.toFixed(1));
// console.log(score.toPrecision(2))// returns a string priortiy are given 
// // to the precised numbers and rest are in exponential form
// //  containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// let num=-10000000
// console.log(num.toLocaleString('en-IN'));
// console.log(Number.MAX_VALUE); // max value and same min 
// //max safe means largest integer you can accuretly respresent precisely without errors
// console.log(Math.abs(num));
// same ceil,floor,and round are available
// square squareroot math.min-> min of array
// math-> math.max-> max of array
console.log((Math.floor(Math.random())*10)+1);

const min = 1
const max = 2;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)