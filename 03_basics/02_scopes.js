
// if(true){
//     let a=10;
//     var b=10;
//     const c=100;
// }

// // console.log(a);
// // console.log(b);
// console.log(b);

// block scope and global scope 
// // revise your concepts
// let a=5;
// if(true){
//     a=6;
// }
// console.log(a); // 6


// let a=5;
// if(true){
//     let a=6
// }
// console.log(a);// 5;
// so the thing is if a variable is global scope then its access
// is everywhere but block scope then only inside the block 
// we can change the global scope by variables by directly accessing it 
// but nor via let keyword same rule apply in c++;

// nested functions

function hello(){
    const username="Adarsh"
    function hx(username){
        const does=""
    }
}
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))// yaaa we can access it like this when function is decleared like this
function addone(num){
    return num + 1
}



addTwo(5)// cant be accessed like this when function is decleared like this
const addTwo = function(num){
    return num + 2
}