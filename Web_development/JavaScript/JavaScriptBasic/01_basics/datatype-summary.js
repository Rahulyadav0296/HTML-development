// // Primitive Data type 
// // they are of sevean type -: 
// // String, number, boolean, null, undefined , Symbol, BigInt

// const score = 100    

// const scoreVal = 100.3

// const isLoggedin = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherID = Symbol('123')

// console.log(id === anotherID);

// const bigNum = 1598158151891n     //add n in the last place in number is represent as bigInt

// console.log(typeof anotherID);


// // Referemce Type:None-primitive -: Array, objects, functions

// const heros = ["Saktiman", "thor", "Iron"]

// // representation of the objects
// let myObj = {
//     name : "Rahul",
//     age : 27,
//     classes : "First",
// }

// console.log(typeof heros)

// //function
// const myFun = function() {
//     console.log("hello world");
// }


// Stack (primitive Type), Heap (Non-primitive Type)
let myYoutubeName = "RKYadav"
let newChannel = myYoutubeName
newChannel = "Ronnie Coloman"

// primitive type elements are stored in the stack 
console.table([myYoutubeName, newChannel]);

let mObj = {
    email: 'user@gmail.com',
    name : 'rahul kumar yadav',
}

newObj = mObj

newObj.email = 'rahulyadav@gmail.com'

console.table([mObj.email, newObj.email])

