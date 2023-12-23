// objects 
// when we create objects using constructor it creates singleton objects
// when we crete objcets us9ng object literals it doesnt create singleton objects

const mysym = Symbol("mykey1")

const myObject = {
    name:"pratik",
    [mysym]:"mykey1",
    "full name":"praik jagtap",
    mail:"pratik@google.com",
    age:22,
    isLoggedIn:true,
    lastLoginDays:["monday","tuesday"]
}

// console.log(myObject.mail);
// console.log(myObject["full name"]);
// console.log(myObject["mail"]);
// console.log(myObject[mysym])

//  changing value of key

// myObject["name"]="pratik jagtap"

// console.log(myObject["name"])

//  ******* freex=zing objects

// Object.freeze(myObject)
// myObject.age=25

// console.log(myObject);

myObject.greeting = function(){
    console.log("Hello Js user")
}
myObject.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(myObject.greeting())
console.log(myObject.greetingTwo())