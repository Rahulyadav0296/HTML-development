// Singleton
// Object Literals

// Object.create // construction method
// objects defines in a keu value pair and key coulb be take it as an String

const mySym = Symbol("key");

const JsUser = {
  name: "Rahul yadav",
  company: "samsung",
  "full name": "Rahul kumar yadav",
  age: 27,
  [mySym]: "myKey1", // Symbol representaion
  email: "rahul@gmail.com",
  iLoggedIn: false,
  lastLoginDays: ["Monday", "TuesDay", "WednesDay"],
};

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // for printing the value of symbols this is the write way to written the code

JsUser.email = "rahul123@chatgpt.com";
// Object.freeze(JsUser); // For never chnage the elements from the objects once this will apply
JsUser.email = "rahul123@microsoft.com";
// console.log(JsUser);

// Create the functions

// This is not a function because we used freeze in previour lines 
JsUser.greeting = function () {
  console.log("HEllo JS USERs");
};

JsUser.greetingTwo = function() {
    console.log(`HEllo JS Users from ${this.company}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

