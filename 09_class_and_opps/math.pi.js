//Object.getOwnPropertyDescriptor();

const descipotor=Object.getOwnPropertyDescriptor(Math,"PI");


console.log(descipotor);
// this value is hardcoded false you cant make it true
// that is why value of math.pi cant change


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// so output is it is wriable,enumerable and configurable
// which means all of its value can be changed

Object.defineProperty(chai,"price",{
    writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"price"));
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
// we stop the enumeration of price and hence price is not iteratable