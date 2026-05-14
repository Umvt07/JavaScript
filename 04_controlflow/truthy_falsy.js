const user="adarsh.ai"
if(user){
    console.log(user);
}
else{
    console.log("dd");
}
// falsy value-> 0,false,-0,BIGINT 0n,"",null,undefined,nan
// except them all are falsy

// truthy values
// "0",'false'," ",[],{},function(){}

const emptyobject={}
if(Object.keys(emptyobject).length===0){
    console.log("EMpty");
}

// Null Coalescing operator (??):null undefined

let val1;
//val1=5??10;
// basically if first one is not null execute it else execute the second one
val1=undefined ?? 15;
let var2= undefined ?? 14 ?? 13;
// jo sabse phle execute hota hai it will print
console.log(val1);

// uternary operator;
// condition ? true : false
const xt=100;
xt>=100 ? console.log("greater than 100" ) : console.log("Less than 100");

val1=null ?? console.log("hello");