// const user = {
//     userName : "Rahul kumar yadav",
//     logCount : 8,
//     signedIn : true,

//     getUserDetails : function() {
//         // console.log("Your user details from database");
//         // console.log(`UserName: ${this.userName}`);
//         console.log(this);  // print all the variables details from user
//     }
// }

// console.log(user.userName);

// console.log(user.getUserDetails());
// console.log(this); //print blank parathensis

// const promiseOne = new Promise();
// const date = new Date(); // new keyword is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting =  function(){
        console.log(`Welocme ${this.usernames}`);
    }

    return this;
}
// console.log(User("Rahulyadav", 12, true));
const userOne = new User("Rahulyadav", 12, true)
const userTwo = new User("sonukumar", 12, true)

console.log(userOne.constructor);
// console.log(userTwo);

// new keyboard creates an new object 
