// Date pbject is represemnt the single moment in time in a palteform indieoendent format
let myDate = new Date()  
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// declare the specific date 
let myCreateDate = new Date(2023, 10, 22, 5, 3);
// console.log(myCreateDate.toLocaleDateString());


let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.toLocaleString('deafault', {
    weekday: "long"
}));