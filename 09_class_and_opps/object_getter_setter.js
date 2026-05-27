const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

// function hello(){
//     function mm(){
//         console.log(chai);
//     }
//     mm();
//     let chai=34
// }
// hello();