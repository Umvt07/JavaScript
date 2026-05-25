// this keyword -> it talks about the current context 
// like inside the user what is the current context
const user={
    username:"Adarsh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
    // so here this keyword is inside the user scope so here this keywords holds the data of the user scope
}
// but here this keyword doesnt hold any value as it is global scope and there is not any object THERE IS NOT ANY GLOBAL OBJECT
// but this keyword in consol gives you the output as windows as window is the global object
// user.welcomemessage();
// console.log(this);
// function suhani(){
//     let username="Adarsh";
//     console.log(this.unsername);
// }
// suhani();
// so this context works only inside the object nor inside the functions
// const Adarsh=function (){
//      let username="Adarsh";
//     console.log(this);
// }

const Adarsh= ()=>{
    let username="Adarsh";
    console.log(this); // so output of this function is different than normal function
}
Adarsh();

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(4,3));


// implicit return 
const addtwo=(num1,num2)=>(num1+num2) // in this we write in the same line and assume that we dont have to return
// curly bracket use karenge toh return you have to write warna uske bina chal jayega with and without parenthiesis
// and jab object return kar rhe toh you have to write it with parenthesis tab hi return hoga else undefined
// see how we return object in arrow functions outside parenthesis is necessary
const addthree=(num1,num2)=>({username:"Adarsh"})
console.log(addthree(4,3));