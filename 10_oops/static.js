class user {
    constructor(username){
        this.username = username
    }
    static property = "this is static";

    static method(){
        return `this is static method`
    }
}

console.log(user.property)
console.log(user.method())

class userTwo extends user {
    constructor(username ,email){
        super(username)
        this.email = email
    }
}

console.log(userTwo.method())