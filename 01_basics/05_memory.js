// two memories are there 
// stack and heap
// stack memory are the primitive ones basically here pass by value (copy) of data 
// type is being done
let var1="HEOOFJF"
let var2=var1
var2="HSHD"
console.log(var2)
console.log(var1)
// see here we can see a copy of var1 in var2 is being given so changes doent get reflected

let var4 = {
    name:"Adarsh",
    age: 18
}
let var5=var4
var5.name="Sharma"
console.log(var4.name)
console.log(var5.name)

// see here both are changed as they are pass by refrence as copy isnt getting share
// actual data is getting shared