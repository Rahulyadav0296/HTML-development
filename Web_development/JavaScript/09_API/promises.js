// // fetch('http://google.com').then().catch().finally()
// // promise is an object
// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls, cyrptography, network
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task  two is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async Two resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Chai", email: "chai@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// promiseFouth = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "rahul", password: "123" });
//     } else {
//       reject("ERROR: SOMETHING WEND WRONG");
//     }
//   }, 2000);
// });

// // promiseFouth.then().catch()
// promiseFouth
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("This promise is either resolved or rejected");
//   });

// // console.log(userName);

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "rahul", password: "123" });
//     } else {
//       reject("ERROR: SOMETHING WEND WRONG");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// // async function getAllUser() {
// //   try {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     // console.log(response);
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.log("Error: ", error);
// //   }
// // }

// // async function getAllUser() {
  
// // }

// // getAllUser();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// })
// .catch((error) => {console.log(error);})
