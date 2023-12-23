const instauser = new Object() // this create singleton object

instauser.name = "pratik"
instauser["username"]="pratiiik4"
instauser.age=22

// console.log(instauser);
// ***************************************************************
const twitterUser = {
    email:"pratik@gmail.com",
    username:{
        fullname:{
            firstname:"pratik",
            lastname:"jagtap"
        },
        number:1234
    },
    password:"123456"
}

// console.log(twitterUser["username"]["fullname"]["firstname"]);
// *************************************************************************

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = Object.assign({}, obj1,obj2,obj3)

// console.log(obj4)

const obj5 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj5)

const users = [{name:"pratik",age:22},{name:"jagtap",age:24}]

// console.log(users[1]["name"]);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

// **************************
const course = {
    courseName:"javascript for beginers",
    courseChannel:"chai and code",
    courseFees:999,
    courseInstructor:"pratik"
}

const {courseInstructor:teacher,courseName:name,courseChannel:channel,courseFees:fee} = course

// console.log(teacher);
// console.log(name);
// console.log(channel);
// console.log((fee));

let array = Array.from({1:"a",2:"b"})
console.log(array);