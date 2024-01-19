class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {    // if define getter define setter as well 
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }

    get email() {    // get and set name will be same 
        return `${this._email}@samsung.com`.toUpperCase()
    }

    set email( val) {
        this._email = val
    }
}


const rahul = new User("rahul123", "abc")
console.log(rahul.password);
console.log(rahul.email);