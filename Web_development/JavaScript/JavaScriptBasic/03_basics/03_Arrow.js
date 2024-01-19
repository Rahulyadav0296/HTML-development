// // This keyword is used to refer the current context(values )

// // create a object of name user with some data entries like username, id with one extra function name welcomeSamsung
// const user =  {
//     userName: "Rahul yadav",
//     id: 63600,
//     welcomeSamsung : function(){
//         console.log(`${this.userName}, Welcome to the Samsung Worlds`);
//         console.log(this);
//     }
// }

// // if we will not initialized the this keyword insides the function then the undefined value will be printed 

// // user.welcomeSamsung();
// // user.userName = "Sam";
// // user.welcomeSamsung();

// console.log(this);   // give us the empty paranthesis

// function chai() {
//     console.log(this);
// }
// chai()


// function chai() {
//     let userNAme = "sonu"
//     console.log(this.userNAme);
// }
// chai()

// const chai = () => {
//     let userName1 = "Rahul"
//     console.log(this.userName1);
// }
// chai()

// Arrow Function

// const addNum = (num1, num2) => {
//     return num1 * num2;
// }

// console.log(addNum(4, 5));

// implicit Arrow Function
// const addNum = (num1, num2) => num1 * num2;
const addNum = (num1, num2) => (num1 * num2);

console.log(addNum(4, 5));

