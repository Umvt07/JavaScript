// // console.log(Temporal.Now.instant()); this is a futuristic vision in 
// // which temoral will be a global object like math 
// // but now dates are given in long string which
// // gives milisecond time from 1970 by which comparsion would
// // be easier represent a instat time of now from 1970 in milisecond

// let mydate=new Date();
// // console.log(mydate);// gives milisecond from 1970
// // console.log(mydate.toString());// actual all time gmt and all
// // console.log(mydate.toDateString());// only date
// // console.log(mydate.toISOString());converts a Date object into a standard international date-time format
// // console.log(mydate.toJSON());//
// // console.log(mydate.toLocaleDateString()); date only in formalt of /
// // console.log(mydate.toLocaleString()); local string + time;
// // console.log(mydate.toLocaleTimeString()); only local time string in :: format
// // console.log(mydate.toTimeString()); complete time in gmt
// // console.log(mydate.toUTCString());//Date into a readable UTC time string.
// // console.log(mydate.getTimezoneOffset());//How many minutes your local time is ahead/behind UTC (world standard time).

// let mycreateddate=new Date("2023-01-14");// or mm/dd/yyyy is also correct
// console.log(mycreateddate.toDateString());// month starts from index 0
// console.log(mycreateddate.toLocaleString());
// console.log(mycreateddate.toLocaleDateString());
// let mytimestamp=Date.now();
// console.log(mytimestamp.toString());
// console.log(mycreateddate.getTime().toString());
// // wrong because both returns numbers not time 
// // so date localedatestring works only on date not on numbers

let newDate = new Date();

console.log(
    newDate.toLocaleString('default', {
        weekday: "long"
    })
);

console.log(newDate.toLocaleDateString('Default',{
    year: "numeric"
})
)