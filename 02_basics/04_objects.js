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
// console.log(array);

const obj = {"e":1,"d":2,"z":3,"a":4,"c":5}
const anotherObj = Object.keys(obj)
const myvalues = Object.values(obj)
const myentries = Object.entries(obj)


// anotherObj.push(12)
for (const iterator of anotherObj){
    // console.log(iterator)
}

// console.log(myvalues)
for (const iterator of myvalues){
    // console.log(iterator)
}

// console.log(myentries)

// ************************************ defineProperties *************

const object1 = {property1:32,property2:33,property3:34}

Object.defineProperties(object1 , {
    property1: {
        value:42,
        writable:false
    },
    property2: {
        value: 43,
        writable: true,
        enumerable:false
    },
    property3 : {
        value:44,
        // writable:true
        configurable:false
    }
});
object1.property1 = 46
object1.property3 = 50
console.log(object1.property1)
delete object1.property3
// console.log(object1)

const objjj = Object.keys(object1)

for (const iterator of objjj) {
    // console.log(object1[iterator])
}

const student  = {
    id : 1,
    name:"pratik",
    course_selected:"Fullstack",
    status:"in_process",
    testScore:[40,45,38,49],
};

student.class = "B.e";

Object.defineProperty(student, "performance",{
    value:"Good",
    writable:true,
    enumerable:true,
});

Object.defineProperty(student,"highScore",{
    writeable:true,
    enumerable:true,
    get(){
        return Math.max(...this.testScore)
    },
    
})


Object.defineProperty(student, "completed", {
    set(val) {
        if(val && this.status=="completed")
        {
        throw new Error ("course already completed")
        }
        if(val)
        {
            this.status = "completed"
        }
    }
})

student.completed = "completed"

console.log(student)

for (const key in student) {
    console.log(student[key])
}

// ****************************** Objet chaining****************

const parentObj = {
    prop1 :"hello i am property of parent object",
    inheritedprop:"hello i am inherited property"
}

const childObj = Object.create(parentObj)

childObj.childProp ="hello i am property of child"

// console.log(childObj.prop1)
// console.log(childObj.inheritedprop)
// console.log(childObj.childProp)

// console.log(Object.hasOwn(childObj,"prop1"))
// console.log(Object.hasOwn(childObj,"inheritedprop"))
// console.log(Object.hasOwn(childObj,"childProp"))



// ************************* loosely coupling of object *************

const myobj1 = {
    username:"pratik",
    myobj2 : {
        getusername: (userObj)=>{
            console.log(`${userObj.username}`)
        }
    }
}

const myobj3 = {
    username:"jagtap"
}

// myobj1.myobj2.getusername(myobj3)


