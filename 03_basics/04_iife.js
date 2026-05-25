//immediately invoke function expression
 // need-> dont want pollution from global scope
 // want immediate execution
 (function chai() {
    console.log(`Db connected`);
 })();// it is called as named iffi
//  ()->function defination
//  ()-> execution call

// must use semi colon at the end of the first code for right execution

// arrow function iffi without parameter->
 ( ()=>{
   console.log(`Hello`);
 })();

 // NOW IF YOU WANT TO PASS THE PARAMETER IN IFFI THEN YOU CAN DO LIKE THIS
 (function chai(dbname) {
    console.log(`Db connected with ${dbname}`);
 })("MongoDB");

 // now you can also pass the parameter in arrow function iffi like this
 ( (dbname)=>{
    console.log(`Db connected with ${dbname}`);
 })("MongoDB");
 
//  for using two iffi must use semi colon after the end of iffi
