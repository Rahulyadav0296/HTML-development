class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was addes by ${this.username}`);
    }
}

const chai = new Teacher("rahul", "chai@123gmail.com", "123456")
// console.log(chai.logMe());

// console.log();

const masalaChai = new User("rahul")
// console.log(masalaChai.logMe());

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
