// const tinderObject = new Object();  // singlton objects 
const tinderObject = {}                // Non singlton objects 

tinderObject.id = "123abc";
tinderObject.name = "harry";
tinderObject.isLoggedIn = false;

// console.log(typeof tinderObject);
// console.log(tinderObject);

const regularUser = {
    email: "rahul123@gmail.com",
    fullName : {
        userName : {
            firstName : "Rahul",
            lastName: "yadav",
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userName.firstName);
// console.log(regularUser.fullName.userName.lastName);
// console.log(regularUser.fullName.userName.firstName);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {1: 'a', 2: 'b'};
const obj3 = {1: 'a', 2: 'b'};

// const obj4 = {obj1, obj2};        // Array Object reprejents for the given objects 
// const obj4 = Object.assign({}, obj1, obj2, obj3)   // blank paranthesis return as target and all remaining elements show as sourse elements
// console.log(obj4);

// const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

// Array of objets are represented int the braces with multiple curly braces inside in it.
const ObjectArray = [
    {
        id: 1,
        email: "abc@gmai.com" ,
    },
    {
        id: 1,
        email: "efg@gmai.com" ,
    },
    {
        id: 1,
        email: "abc@gmai.com" ,
    },
    {
        id: 1,
        email: "abc@gmai.com" ,
    }
]

console.log(ObjectArray[1].email);

console.log(tinderObject);
console.log(Object.keys(tinderObject));
console.log(Object.values(tinderObject));
console.log(Object.entries(tinderObject));

console.log(tinderObject.hasOwnProperty('isLogged'));