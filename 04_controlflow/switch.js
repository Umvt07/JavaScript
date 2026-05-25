//switch case

// syntax

// switch(key){
    // case value:

    //     break
    // default:
        
    //     break;
// }
const day=3;
switch(day){
    case 1: 
        console.log("Mon");
        break;
    case 2:   
        console.log("TUE")
        break;
    case 3: 
        console.log("Wed");
        break;
    case 4:
        console.log("Thru");
        break;
    default:
        console.log("default");
        break;
}  

// whenever any case matches then execution of all cases below it takes place except the
// default one so that is why we apply break here so that it gets out of that
// agar ek accept ho gaya toh uske baad ka wo koi bhi case check hi nhi karta 
// directly execution
// and after that bas defualt ko execute nhi karta defualt is only executed when none is
// getting executed