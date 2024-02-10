// "use strict"
function setUser (username){
    this.username = username;
    console.log("this function is called");
    return this
}
function settingEmail (email){
    this.email = email;
    console.log("this function is called");
    return this
}

function user(username,email, password){
    setUser(username)
    settingEmail(email)
    // this.email = email;
    // this.password =password;
}

// const userOne = new user("swapnil" , "pratik@gmail.com" , 123)

// console.log(userOne)


const obj1 = {
    username : "pratik",
    lastName:"jagtap",
    email:"xyz",
    obj2 : {
        getUser : function(user){
            console.log(this.username)
            console.log(this.email)
            console.log(this.lastName)
        }
    }
}

// obj1.obj2.getUser.call(obj1)


const status = "pratik"

function sayhello(){
    const status = 2;

    const data = {
        status : 3,
        getStatus: function(){
            return this.status;
        },
    };

    console.log(data.getStatus());
    // console.log( this)
    console.log(data.getStatus.call(this));
};
sayhello()

// this.user = "pratik"
// console.log(this)