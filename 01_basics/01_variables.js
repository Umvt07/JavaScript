const accountId=12234
let accountemail="Sharmaadarsh10534@gmail.com"
var accountPassword="12345"
accountcity="Jaiput"
// accountId=2 // not allowed cant change const keyword
console.log(accountId)

/*
    prefer not to use var
    due to issue in block scope and functional scope
    what is scope-> {} like it couldnt able to define its boundary 
    so only two datatypes const and let const for not changing variables and 
    let for the changing ones
    and yaa we can even define things without variables also
    you can apply semicolon or nor it do
*/
console.table([accountId,accountemail,accountPassword,accountcity]);