for(let i=0;i<=10;i++){
    const element=i;
    console.log(element);
}

for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        console.log(`inner loop ${i} and ${j}`);
    }
}
let myarray=["flash","Saktiman"]
for(let index=0;index<=10;index++){
    console.log(index);
    if(index==4){
        break;
    }
}
let xx=0;
while(xx<24){
    console.log(xx);
    xx=xx+1;
}

do{
    // condition
}while()