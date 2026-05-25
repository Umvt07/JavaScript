// // promise object represent the eventual completion of an asynchronous operation and its value

// const promise1=new Promise(function(resolve,reject){
//     // do an async task
//     // db calls,crytogrpahy,newtwork
//     setTimeout(() => {
//         console.log("Assync tas is complete")
//         resolve();
//     },1000);
// });
// promise1.then(function() {
//     console.log("Promise consumed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("HO GAYAYAYA")
//     }, 1000);
// }).then(function () {
//     console.log("Async 2 resolved");
// }).catch(function () {
//     console.log("Error");
// })

// const promisethree=new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         resolve({username:"chai",email:"sharma@194.com"})
//     },1000);
// })

// promisethree.then(function (user) {
//     console.log(user);
// })
// const promisefour=new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         let error=true;
//         if(error){
//             resolve({username:"adarsh",pass:"123"});
//         }
//         else{
//             reject('error something went wrong');

//         }
//     }, 1000);
// })
// promisefour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).finally(()=>{
//     console.log("ho gayaaaaa")
// })
// // this .then returns a promise not a value so thats why another then function can fetch its value
// // setTimeout(() => {
// //     console.log(arr);
// // }, 1000);
// // if we directly do console.log(arr) then at that time it will print pending as till that time promise is not resolved or rejected
// // and arr will not print username it would print another promise as then returns promise not a username
   

// const promisefive=new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         let error=true;
//         if(!error){
//             resolve({username:"js",pass:"123"});
//         }
//         else{
//             reject('js went wrong');

//         }
//     }, 1000);
// })

// async function consumepromisefive() {
//     try{
//         const response=await promisefive; // promisefive is a object not a function so we wont write promisefive()
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// consumepromisefive();



// async function getAllUsers(){
//     try {
//          const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         response.json();
//         console.log(response);
//         const data=await response.json();// response.json also 
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();
// Your mistake is here:

// const data=response.json();

// response.json() ALSO returns a promise.

// So data becomes:

// Promise { <pending> }

// NOT actual JSON data.

// You must use await again.

// its good always to use await there is no harm in it right??

// Not always.

// await is useful only when the thing returns a Promise.

// Use await when:

// You need the actual resolved value from a promise

// Do NOT use it blindly everywhere.




fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})