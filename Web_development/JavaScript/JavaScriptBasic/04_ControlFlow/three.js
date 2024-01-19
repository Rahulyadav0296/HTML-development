// For loop in Array Form

// For of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// The javascript for of statement loops through the values of an iterable object.
// let txt = 4;
// for (const i of arr) {
//     txt += i;
// }

// console.log(txt);

// let language = ["String", "BMW", "Marcedese", "Volvo"];
// let txt = " ";

// for (const x of language) {
//     txt += x;
// }

// console.log(txt);

// const arr = [1, 2, 3, 4, 5];

// for (const x of arr) {
//     console.log(x);
// }

// const greeting = 'Hello WOrld';

// for (const greet of greeting) {
//     console.log(`Each character in gretting is ${greet}`);
// }

// maps
const map = new Map()
map.set('IN', 'Ind')
map.set('Fr', 'France')
map.set('USA', 'United state of america')

// console.log(map);

// for (const key in map) {
//     console.log(map[key]);    
// }

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'NMSER',
// }


// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// }

// const myObject = {
//     js: "JavasCRIPT",
//     cpp: "C++",
//     rb : "ruby",
//     html: "Markup language",
// }

// for (const key in myObject) {
//     if (myObject.hasOwnProperty.call(myObject, key)) {
//         const element = myObject[key];
//         // console.log(`${key} shortcut of the languages is ${element}`);
//     }
// }

// const arr = ["c++", "java", "python", "SQL"]

// for (const key in arr) {
//     console.log(`value in ${key} is ${arr[key]}`);
// }

//ForEach loop

const arr = ["c++", "java", "python", "SQL", "ruby"];

// arr.forEach( function (item) {
//     console.log(item);
// } )

// With help of Arrow functionn

// arr.forEach((item) => {
//     console.log(item);
// } )

// function printIn(items) {
//     console.log(items);
// }

// arr.forEach((items, index, arr) => {
//     console.log(items, index, arr);
// });

// const myCoding = [
//     {
//         langaugeName : "JavaScript",
//         langaugeFileName : "js",
//     },
//     {
//         langaugeName : "Java",
//         langaugeFileName : "java",
//     },
//     {
//         langaugeName : "Pyton",
//         langaugeFileName : "py",
//     },
//     {
//         langaugeName : "CSS",
//         langaugeFileName : "css",
//     },
// ]

// myCoding.forEach((item) => {
//     console.log(item.langaugeFileName);
// })

// const coding = ["c++", "java", "python", "SQL", "ruby"];

// const value = coding.forEach( (items) => {
//     return items;
// })


// console.log(value);


const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let newArr = myArr.filter( (nums) => nums > 5)
// // console.log(newArr);

// let newArr = []
// myArr.forEach( (items) => {
//     if(items > 5){
//         newArr.push(items);
//     }
// })

// // console.log(newArr);

// // Create an object name myBook with title, genre, public, edition

// const myBook = [
//     {title : 'Book One', genre : "MAths", publish : 1996, editon : 'Second'},
//     {title : 'Book One', genre : "MAths", publish : 1999, editon : 'Fifth'},
//     {title : 'Book One', genre : "Politics", publish : 1990, editon : 'Fourth'},
//     {title : 'Book One', genre : "Politics", publish : 1991, editon : 'Third'},
//     {title : 'Book One', genre : "Politics", publish : 1992, editon : 'Second'},
//     {title : 'Book One', genre : "MAths", publish : 1994, editon : 'Second'},
//     {title : 'Book One', genre : "metry", publish : 1998, editon : 'Third'},
//     {title : 'Book One', genre : "Geography", publish : 1997, editon : 'First'},
//     {title : 'Book One', genre : "History", publish : 1999, editon : 'Second'},
// ]

// // const newArray = myBook.filter( (bk) =>  bk.genre === "MAths")
// // print the book which pubcliced after 1992 
// const pubclicBook = myBook.filter( (bk) => bk.publish > 1996)

// console.log(pubclicBook);

// // console.log(newArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newValue = myArray.map( (num) => { return num + 10})
// // console.log(newValue);

// const newNum = myArray.map((num) => num * 10).map( (num) => num + 1).filter( (num) => num > 40)

// console.log(newNum);


// reduce javascript 

const myArray = [1, 2, 3, 4, 5];

const initialValue = 0;

// const myTotal = myArray.reduce(function (accum, currVal) {
//     console.log(`accumulutor value is  ${accum} and current value is : ${currVal}`);
//     return accum + currVal;
// }, 3)

// const myTotal = myArray.reduce((accum, currVal) => accum + currVal, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Mobile dev Course",
        price : 2999,
    },
    {
        itemName : "Mobile dev Course",
        price : 2999,
    },
    {
        itemName : "Mobile dev Course",
        price : 2999,
    },
    {
        itemName : "Mobile dev Course",
        price : 2999,
    },
]

const shopping = shoppingCart.reduce((acc, currVal) => (acc + currVal.price), 0)
console.log(shopping);