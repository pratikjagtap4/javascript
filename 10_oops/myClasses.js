class user {
    constructor (username , email , password){
        this.password = password; 
        this.email = email;
        this.username= username;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new user("pratik" , "pratik@gmail.com" , 123456)

console.log(userOne.encryptPassword())

console.log(userOne.changeUsername())

// ********************* Behind the scene of class and constructor *************


function createUser(username, email , password){
    this.username = username
    this.email =email 
    this.password = password
}

createUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

createUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new createUser("swapnil" , "Swapnil@gmail.com" , 9693)

console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())