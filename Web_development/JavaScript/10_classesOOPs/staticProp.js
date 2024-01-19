class User {
    constructor(UserName){
        this.UserName = UserName
    }

    logMe(){
        console.log(`USERNAME is ${this.UserName}`);
    }

    static createId() {     // it cannot be allow anyone to access it
        return `123`
    }
}

const hitesh = new User("rahul")
// console.log(hitesh.createId());
console.log(hitesh.logMe());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
        
    }
}

const iphone = new Teacher("sonu", "sonu123@gmail.com")
console.log(iphone.logMe());
console.log(iphone.createId());
