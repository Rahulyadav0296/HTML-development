// let num = 10;

// stringNum = String(num);

// console.log(typeof stringNum);

const myName = "Rahul";
const value = 54;

// console.log(`Hello my name is ${myName} and i got ${value} marks in gate`);

// Declare a new string 
// const newString = new String("Hitesh");

// console.log(newString[1]);
// console.log(newString.toUpperCase());

const score = 100;

// console.log(score.toString().length);
// console.log(score.toFixed(2));  
// toFixed print the value in floating with two deciman number 

const otherNumber = 1123.505
// console.log(otherNumber.toPrecision(4));

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// We can declare the format of date according to us
// let createDate = new Date(2023, 10, 22, 5, 3);
// console.log(createDate.toLocaleDateString());

// Data type are generally are of two type 
// 1) Primitive Data tYpe 
// String, number, boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const newId = Symbol('123')
// console.log(id === newId);

// in big int we have to put n in the last of a number is called bignum

const BigData = 234353562457n;
// console.log(typeof BigData);

// Non-primitive Data Type; Array, Function, Object 

// Array Representation 
const arr = [12, 4, 45, 6];

// create an object 
const myObject = {
    myname : "Rahul",
    email : "rahulyadav0296@gmail.com",
    age: 27,
}

// console.log(myObject);

// Array of objects 
const myObjectArray = [
    {
        title: "Software Engineer",
        role : "Senior Executive",
    },
    {
        title: "Software Engineer",
        role : "Senior Executive",
    },
    {
        title: "Software Engineer",
        role : "Senior Executive",
    },
    {
        title: "Software Engineer",
        role : "Senior Executive",
    },
    {
        title: "Software Engineer",
        role : "Senior Executive",
    },
]

// console.log(myObjectArray);

// How to create the function

function myFunction (par1, par2) {
    return par1 + par2;
}

// console.log(myFunction(5, 6));

// Array 
// Declaration of the arrray 
const myCollection = [12, 3, 4, 5, 6]
// console.log(myCollection);

// how to create new arr 
const newArray = new Array(1, 2, 3, 4, 5);

// console.log(newArray[3]);

// arr methods 
newArray.push(7);
newArray.push(9);

// console.log(newArray);

// for placing the element in the first position in array 
newArray.unshift(0);
// console.log(newArray);

// if you want to delete first element from the array use shift

// newArray.shift();
// console.log(newArray);


// includes telling us the element is present or not
// if present returrn true otherwise return false
// console.log(newArray.includes(9));

// merge Two array ina single arrayu
const myHerosMarvel = ["Iron Men","Thor", "Wakanda"];
const dc_heros = ["SuperMen", "wonderWomen", "Aquamen"];


// An Alternative Method 
// newCollections = myHerosMarvel.concat(dc_heros)

// advanced method 
newCollections = [...myHerosMarvel, ...dc_heros]
// console.log(newCollections);

// print a new array whihc concatanate the all sub arrayb in a single array
const anotherArray = [1, 2, 3 ,[4, 5, 6], 7, 8, [4, 5, [1, 2, 3]]];
// console.log(anotherArray);

const real_array = anotherArray.flat(Infinity)
// console.log(real_array);

// console.log(Array.from("rahul"));
// console.log(Array.isArray("rahul"));

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

// const tinderObject = new Object();   // Object with singlton 

// representation of object in another way 
const tinderObject = {}    // Non singlton Objects 

tinderObject.id = 123;
tinderObject.myName = "Rahul";
tinderObject.isLoggedIn = true;

// console.log(tinderObject);
// console.log(typeof tinderObject);


// Create an object with email and fullName (firstName, lastName)

const regularUser = {
    email: "abc123@gmail.com",
    phoneNumber : 7509722382,
    fullName : {
        firstName : "rahul",
        lastName : "yadav",
    }
}

// console.log(regularUser.fullName.lastName);
// console.log(regularUser.phoneNumber);

const obj1 = {1: "a", 2: "b"};
const obj2 = {4: "c", 3: "c"};

const obj3 = {obj1, obj2};

// blank paranthesis return as a target element and other remaining parts are working as source
const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

// console.log(obj3);

// Api : JSON 
// {
//     "" : "",
// }

// print the sum of two numbers with the help of function

function printSum(num1, num2){
    return num1 * num2;
}

console.log(printSum(12, 6));

function calculatePrice(...val1) {
    return val1;
}

// console.log(calculatePrice(200, 300, 400, 300, 500));

// const user = {
//     name: "Sonu Kumar",
//     age : 27,
// }

// function handleObject(anyobject) {
//     return (`My name is ${anyobject.name} and the age is ${anyobject.age}`)
    
// }

// console.log(handleObject(user));
 
// when we define function within the object so for returning the value in the function we used this keyborad 

const user = {
    userName: "Rahul yadav",
    id: 63600,
    welcomeSamsung : function () {
        console.log(`${this.userName}, welcome the technology with id ${this.id}`);
    }
}

// user.welcomeSamsung()
// user.userName = "Sam";
// user.welcomeSamsung();

// Arrow Function Representation
const chai = () => {
    let userName1 = "Rahul"
    console.log(userName1);
}
// chai()

const addnum = (v1, v2) => {
    return v1* v2;
}
// console.log(addnum(20, 10));

// // Immedaitly involked function expressions *IIFE

// (function chai() {
//     console.log('DB CONNECTED');
// })

// // for removing the global score pollution we used IIFE 

// ((name) => {
//     console.log(`DB COnnected ${name}`);
// }) ("arvi");

// for loop

const newNum = [1, 2, 3, 4, 5, 6];

// let txt = 1;

// for (let index = 0; index < newNum.length; index++) {
//     txt += newNum[index];
//     // console.log(txt);
// }

// for (const i of newNum) {
//     txt += i;
// }

// console.log("The Final result is: ", txt);

// let language = ["String", "BMW", "Marcedese", "Volvo"];
// let txt = " " 

// for (const i of language) {
//     txt += i;
// }
// console.log(txt);

// const greeting = "Hello Worlds";

// for (const greet of greeting) {
//     console.log(`The character is ${greet} in the greeting`);
// }

// Map
const map = new Map(); // define the new map keyboard
map.set("US", "United state of America");
map.set("Can", "CANADA")
map.set('IND', "INDIA")

// for (const i of map) {
//     console.log(map[i]);
// }

const myObjectives = {
    js: "JavasCRIPT",
    cpp: "C++",
    rb : "ruby",
    html: "Markup language",
}

// for (const key in myObjectives) {
//     console.log(key);
// }

const languages  = ["c++", "java", "python", "SQL", "ruby"];

// for (const sub in languages) {
//     console.log(`The sub are in index ${sub} for the languages ${languages[sub]}`);
// }

// languages.forEach( function (item) {
//     console.log(item);
// })

// // define the above code with the help of arrow keyword 
// languages.forEach( (item) => {
//     console.log("The Arrow function elements: ", item);
// })

// languages.forEach((items, index, arr) => {
//     console.log(items, index, arr);
// })

const myCoding =[
    {
        langaugeName : "JavaScript",
        langaugeFileName : "js",
    },
    {
        langaugeName : "Script",
        langaugeFileName : "Script",
    },
    {
        langaugeName : "JavaScript",
        langaugeFileName : "js",
    },
    {
        langaugeName : "Java",
        langaugeFileName : "java",
    },
]

// myCoding.forEach( (items) => {
//     console.log(items.langaugeFileName);
// })

// myCoding.forEach( (items) => {
//     console.log(items.langaugeName);
// })

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newAr = myArr.filter( (items) => items > 5)
// console.log(newAr);

// let result = [];

// myArr.forEach( (item) => {
//     if(item > 5){
//         result.push(item)
//     }
// });
// console.log(result);

const myBook = [
    {title : 'Book One', genre : "MAths", publish : 1996, editon : 'Second'},
    {title : 'Book One', genre : "MAths", publish : 1999, editon : 'Fifth'},
    {title : 'Book One', genre : "Politics", publish : 1990, editon : 'Fourth'},
    {title : 'Book One', genre : "Politics", publish : 1991, editon : 'Third'},
    {title : 'Book One', genre : "Politics", publish : 1992, editon : 'Second'},
    {title : 'Book One', genre : "MAths", publish : 1994, editon : 'Second'},
    {title : 'Book One', genre : "metry", publish : 1998, editon : 'Third'},
    {title : 'Book One', genre : "Geography", publish : 1997, editon : 'First'},
    {title : 'Book One', genre : "History", publish : 1999, editon : 'Second'},
]

const newBooks = myBook.filter( (item) => item.genre === "MAths")
// console.log(newBooks);

const publicBook = myBook.filter( (pub) => (pub.publish === 1999 && pub.genre === "MAths" ))
// console.log(publicBook);

const myArr = [1, 2, 3, 4, 5];

// const newValue = myArr.map( (num) => {num*10}).filter( (num) => num <= 6)
// console.log(newValue);

// const myTotal = myArr.reduce(function (acc, currVal) {
//     console.log(`Accumulator value is ${acc} and the current value is ${currVal}`);
//     return acc + currVal;
// }, 0)

const myTotal = myArr.reduce( (acc, currVal) => acc + currVal, 0)

console.log(myTotal);

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

const totalPrice = shoppingCart.reduce( (acc, num) => acc + num.price, 0)
console.log(totalPrice);