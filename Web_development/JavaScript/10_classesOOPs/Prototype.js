// let myName = "Rahul   "

// console.log(myName.trueLenght);

// let myHeros = ["thor", "IronMen"]

// let heroPower = {
//     thor : "Hammer",
//     ironMen : "Shuit",

//     getSpiderPower : function () {
//         console.log(`The Iron Men power is : ${this.ironMen}`);
//     }
// }

// Object.prototype.rahul = function() {
//     console.log("Rahul is present in all objects");
// }

// Array.prototype.heyRahul = function(){
//     console.log(`Hello i am the array.`);
// }

// heroPower.rahul();

// myHeros.heyRahul();
// heroPower.heroPower();


// inheritance

const user = {
    name: "chai",
    gmail: "chai@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

// Teacher.__proto__ = user

// // Modern Syntax 
// Object.setPrototypeOf(TeachingSupport, TASupport);

let anotherUserNam = "ChaiAurCode   ";

String.prototype.truLenght = function() {
    // console.log(`${this.name}`);
    // console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserNam.truLenght()
"hitesh".truLenght()
"rahul".truLenght()