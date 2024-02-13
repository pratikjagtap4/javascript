class user{
    constructor(username){
        this.username = username
        this.lastname = "jagtap"
    }
    
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

    age = 22
}

class teacher extends user {
    constructor(username , email , password, subject){
        super(username);
        this.email = email;
        this.password = password ;
        this.subject = subject;
    }

    newCourse(){
        console.log(`${super.changeUsername()} ${this.lastname} introduces ${this.subject} as a new subject and his age is ${this.age} `)
    }
}

const userOne = new teacher("pratik" , "pratik@123" , 123456 , "science")

userOne.newCourse()