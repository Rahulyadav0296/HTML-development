// function 
function syFun() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// syFun();

// print the sum of two numbers 

// function addTwonumber(num1, num2){
//     console.log(num1 + num2);
// }

// addTwonumber(3, 5);

// return sum of two numbers


function addTwonumber(num1, num2){
    // let result = num1 + num2;
    // return result;
    return (num1 + num2);
}

// console.log(addTwonumber(4, 6));

function loginUserName(username) {
    // if(username == undefined){
    //     console.log("Please Enter a User Name");
    //     return;
    // }
    if(!username){
        console.log("Please Enter a User Name");
        return;
    }
    return (`${username}, Just logged in`)
}

let result = loginUserName();
// console.log(result);

//when we not define any value so function will give you a undefined values

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    name: "RAhul kumar",
    price : 300,
}

function handleObjects(anyobject) {
    return (`My Name is ${anyobject.name} and i buy a product at a price ${anyobject.price} of that cost`);
}

// console.log(handleObjects(user));

const myNewArray = [200, 300, 500, 600];

function returnSecondValue(getArray){
    console.log(`Second Value of the Array is ${getArray[1]}`);
}

returnSecondValue(myNewArray);

