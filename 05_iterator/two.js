// // different loops

// // // here object is any iteratable object
// // for (const element of object) {
// //     // so elements can access trought the array and all
// // }
// const hello=[2,3,4,4,5,6];
// for(const element of hello){
//     console.log(element)
// }

// const map=new Map();
// map.set("Adarsh","Sharma");
// map.set("Sharma","Adarsh");
// // map.set("Sharma","Sharma");
// console.log(map);

// for(const [key,value] of map){
//     console.log(key);
//     console.log(value);
// }

// const myObject={
//     'game1':'Nfs',
//     'game2':'Spiderman'
// }
// // for(const[key,value] of myObject){
// //     console.log(key);
// //     console.log(value);
// // }// error by for of loop you cant iterate myobject like this


// // for object we use for in loop // basically it gives key
// for (const keu in myObject){
//     console.log(myObject[keu]);
// }
// // for array it will print the index basically

// // for in loop doesnt work in map

// for each loop
const coding=[1,2,3,4,5,7,8,4,3,45,9];
// coding.forEach( function (item){
//     console.log(item);
// } )
// for each array pe lagta hai
// in this ARRAY_NAM.forEach() yeh parenthesis ke andar function ka sab kuch
// codi ng.forEach(function hey(){
    // 
//}   )
// iske baad yeh callback function hai toh iska name nhi hoga and parameter ke andar
// index jayega jo direclty array ke item ko point karega


// we can evern use arrow functuon
// // again uske jaisa name hata do toh name and equals to hat jayega
// coding.forEach( (item)=>{
//     console.log(item);
// })

// we can also pass functions inside this

/// see how

function hello(username){
    console.log(username);
}
// basically hello ka refrence dena hai usse execute nhi karna hai 
// so it will pass as hello nor hello()
coding.forEach(hello)

// parameters can we multiple apart from  item also 
// so it can access item,index,entire array it can also
// coding.forEach( function (item,index,arr){
//     console.log(item,index,arr);
// })

const mycoding =[
    {
        languageName:"Js",
        lan:"Jss",
        age:"19",
    },
    {
        languageName:"Js",
        lan:"Jss",
        age:"19",
    },
    {
        languageName:"Js",
        lan:"Jss",
        age:"19",
    }
]

mycoding.forEach(function (item){
    console.log(item.languageName)
})

mycoding.forEach((item)=>{
    console.log(item.languageName)
})