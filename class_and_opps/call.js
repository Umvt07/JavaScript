function setusername(username){
    this.username= username
    console.log("called");
}
function  createuser(username,email,password) {
    // setusername(username);// yeh call nhi ho raha  baiscally not the right way
    // setusername.call(this,username);// in this way you call the function
    // and to get the current context of this functio we passed
    // the parameter this
    this.email=email;
    this.password=password;
}
const chai=new createuser("chai","@gmail","1234");
console.log(chai);