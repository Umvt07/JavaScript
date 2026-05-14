//
// const arr= [1,2,3,4,5];

// const asx=arr.forEach(function(item){
//     return item;
// })
// console.log(asx);

// forEach method is used to iterate over an array and execute a provided function once for 
// each array element. It does not return a new array, but rather executes the function for each
// element in the original array. The return value of the function is ignored, and the forEach method itself returns undefined.

const mynums=[1,2,3,4,5];
let newnums=mynums.filter((num)=>num>4)
// now go and revise the concept of curly bracket and parenthesis of return when we return and when not
newnums=mynums.filter((num)=>(
    num>4
)
)
newnums=mynums.filter((num)=>{
    return   num>4
}
)
const newnux=[];
mynums.filter((num)=>{
    if(num>2)newnux.push(num)
})
console.log(newnux);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  // question is give me all books of science

  let book_need=books.filter( (bks)=>{
    if(bks.genre=="Science"){
        return bks.title
    }
  })
  console.log(book_need)
  // in this way you cant get books_tittle

  // ans->
  book_need=books.filter((bks)=>(bks.genre=="Science")).map((bks)=>(bks.title));
  console.log(book_need);