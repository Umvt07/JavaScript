let arr=null;
function randomColor(){
  const hex='0123456789ABCDEF'
  let color="#";
  for(let i=0;i<6;i++){
    color+=hex[Math.floor((Math.random()*16))];
  }
  return color;
}
document.querySelector('#start').addEventListener('click',()=>{
  if(arr==null){
    arr=setInterval(()=>{
      document.querySelector('body').style.backgroundColor=randomColor();
    },1500)
  }
})
document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(arr);
    arr=null;
    document.querySelector('body').style.backgroundColor="Black";
})