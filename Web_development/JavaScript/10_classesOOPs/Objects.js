// function multiplyFive(nums) {
//     return nums*5;
// }

// multiplyFive.power = 2;

// console.log(multiplyFive(5));
// console.log(multiplyFive.power);
// console.log(multiplyFive.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
    console.log(`The new price is : ${this.score}`);
}

createUser.prototype.printMe = function(){
    console.log(`The Price is: ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
chai.increment();


