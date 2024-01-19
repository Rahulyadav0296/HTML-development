function setUsername(username){
    // complex db calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("rahul", "abc@123gmail.com", "Sonu00989")
console.log(chai);