function sayhello(){
    console.log("Hello");
}
sayhello();

function say(a,b){
    return a+b;
}
const t=2+say(2,3);
console.log(t);

function areyouhere(username){
    return `yes the user ${username} is here`
}
console.log(areyouhere());
console.log(areyouhere("adarsh"));
function handleObject(anyobject={
    username="Guest",
    price=0
}){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
handleObject();