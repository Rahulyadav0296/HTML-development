var c = 200   // Global Scope

if(true){
    let a = 10;
    const b = 20;    //local Scope
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nsted sCope
// function One(){
//     const userName =  "Rahul"
//     function two(){
//         const website = "youtube"
//         console.log(userName);
//     }
//     // console.log(website);
//     two()
// }
// One()

// if(true){
//     userName = "Hitesh Sahu"
//     if(userName === "Hitesh"){
//         const website = " Youtube"
//         console.log(userName + website);
//     }
//     // console.log(website);
// }

// console.log(userName);

// +++++++++++++++++++++++Intesting Things +++++++++++++++++++++++++++//
addOne(5)
function addOne(num){
    return num + 1;
}

// console.log(addOne(5));

// addTwo(5)
const addTwo = function(num1){
    return num1 + 2;
}



// in case of function declaration we can declare before using a funciton but when we assign function as an expression so 
// can not able to call the function before the function 