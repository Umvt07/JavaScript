// console.log(2>1)
// console.log(2!=1)
// console.log("2">1)
// console.log("02">1)
// here js automaticALLy converted it into int

// console.log(null>0)
// console.log(null==0);
// console.log(null>=0);
//  JavaScript, null >= 0 becomes true because of type coercion (automatic type conversion).
// When JavaScript sees
// console.log(null >= 0);
// it does this internally:
// For comparison operators like >=, JavaScript tries to convert values to numbers.
// null gets converted to 0.
// So it becomes:
// 0≥0
// And that is obviously true.
// So output:
// true
// The confusing part is that null behaves differently with ==:
// null == 0   // false
// null >= 0   // true
// null > 0    // false
// null <= 0   // true
// Why?
// Because == follows different coercion rules than relational comparisons in JavaScript.
// JavaScript can be weird here 😄

// same rule applies for undefined  but it gives false for every case
// console.log(undefined>0)
// console.log(undefined==0);
// console.log(undefined>=0);

// now ===
// this compares the datatype also so it is called as strict check
console.log(2===2);
console.log("2"===2);


// at the end try to write clean code!!!!!