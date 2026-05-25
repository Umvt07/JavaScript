const user={
    usernamename:"Adarsh",
    logincnt:18,
    islogin:true,
    sayhello:function(params) {
        console.log("Hello");
    },
    // sayusername:function () {
    //     // console.log(`${this.name}`);
    //     console.log(this.sayusername());
    // }
}

// console.log(user.sayhello());
// console.log(user.sayusername());

// const promise=new Promise();
// const date=new Date();
// constructor function prevents repetitive declearation of objects

function User(username,logincnt,islogin){
    this.username=username;
    this.logincnt=logincnt;
    this.islogin=islogin;
    return this// current context

}

const userone=new User("Sharma",12,true);
console.log(userone);
// same new prevents the overwrite of the object via constructor
