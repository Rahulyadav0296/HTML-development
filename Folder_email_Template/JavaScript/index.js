// const person = {
//         firstName: "Rahul",
//         lastName: "yadav",
//         age: 26,
//         eyeColor: "blue",
//       };
//       person.nationality = "Indian";
//       delete person.eyeColor;
//       let txt = "";
//       for (let x in person) {
//         txt += person[x] + " ";
//       }

//       document.getElementById("demo").innerHTML = txt;

// const myObj = {
//   name: "Rahul Kumar yadav",
//   age: 26,
//   cars: [
//     { name: "Ford", models: ["Focus", "ferari", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// let x;

// for (let i in myObj.cars) {
//   x += "<h1>" + myObj.cars[i].name + "</h1>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
//   }
// }

// document.getElementById("demo").innerHTML = x;

// Javascript objects methods
// creates an object
// const person = {
//   name: "rahul kumar yadav",
//   id: 26,
//   fullName: function () {
//     return (this.name + " Age is " + this.id).toUpperCase();
//   },
// };
// document.getElementById("demo").innerHTML = person.fullName();

// using Object.values () : any javascipt can be converted to an array using this

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray;

// using JSON.stringify()
// this one can also converts dates into strings
// any javascript object can be stringfied (converted to string) with the javascipt funtion JSON.stringify()
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   today: new Date(),
// };

// // const myArray = Object.values(person);
// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;

// Javscript Object Accessors
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   },
// };

// // Display data from the object using a getter
// document.getElementById("demo").innerHTML = person.lang;

// Display data from the object using a setter
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   },
// };

// // set an object property using a setter
// person.lang = "Hindi";

// // Display data from the object
// document.getElementById("demo").innerHTML = person.language;

// javascript object constuctors
// constuct function for person objects
// function Person(first, last, age, year) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.year = year;
// }

// //create a person object
// const myFather = new Person("Rahul", "Yadav", 23, 1996);

// // display objects
// document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + ".";

// Object Types (Classes )

// function Person(first, last, age, year) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.year = year;
// }

// //create two person object
// const myFather = new Person("Rahul", "Yadav", 23, 1996);
// const myMother = new Person("Heena", "Yadav", 23, 1996);

// // Add a name mthod to first object
// myFather.name = function () {
//   return this.firstName + " " + this.lastName;
// };

// // Display full name
// document.getElementById("demo").innerHTML = "My father is " + myFather.name();

// Creates a map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// fruits.set("apples", 700);
// fruits.delete("apples");
// fruits.clear();
// document.getElementById("demo").innerHTML = fruits.get("apples");

// list aa entries
let txt = "";
fruits.forEach(function (value, key) {
  txt += key + " " + value + "<br>";
});

document.getElementById("demo").innerHTML = txt;
