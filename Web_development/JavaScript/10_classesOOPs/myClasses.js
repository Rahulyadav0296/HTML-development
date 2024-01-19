// ES6

class User {
  constructor(username, email, password) {
    this.usernamem = username;
    this.email = email;
    this.password = password;
  }
  
  encryptPassword(){
    return `${this.password}abc`
  }

  userCapital(){
    return `${this.username?.toUpperCase()|| "wrong input"}`
  }

}

const chai = new User('Rahul', "chai123@gmail.com", "123456")
console.log(chai.encryptPassword());
console.log(chai.userCapital());