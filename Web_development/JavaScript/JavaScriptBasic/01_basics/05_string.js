// const myName = "Rahul"
// const value = 54;

// console.log(`Hello my name is ${myName} and i have only ${value} rupees`);

// const myGame = new String("hiteshh")

// console.log(myGame[0]);
// console.log(myGame.toUpperCase());
// console.log(myGame.length);
// console.log(myGame.charAt(2));
// const anotherString = myGame.slice(-8, 4);
// console.log(anotherStringS);

// const string1 = "A String Primitives"
// const string2 = "Also a primitives String"

// const string3 = "Yet another String primitives"

// const string4 = new String("A String object")

// const string5 = "cat"
// console.log("chat".charAt(2));

const a = "v";
const b = "b";

// if(a < b){
//     console.log(`${a} is less than ${b}`);
// } else if(a > b){
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${a} and ${b} is equal`);
// }


// function areEqualCaseInsentive(str1, str2){
//     return str1.toUpperCase() === str2.toUpperCase();
// }

// const areEqualInUpperCase = (str1, str2) => 
//      str1.toUpperCase() === str2.toUpperCase();

// const areEqualInLowerCase = (str1, str2) => 
//      str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("rahul", "yadav");
// areEqualInLowerCase("kumar", "yadav");

const strPrim = "fooo";   // A Literal is a string primitive

const strPrim1 = String(1); // Coerced into the string primitive

const strPrim2 = String(true); // coerced into the string primitive "true"

const strPrim3 = String(strPrim); // String with new returns a string wrapper object

console.table([typeof(strPrim), typeof(strPrim1), typeof(strPrim2), typeof(strPrim3)])