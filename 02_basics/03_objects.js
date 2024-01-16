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
    // console.log("Hello Js user")
}
myObject.greetingTwo = function(){
    // console.log(`Hello Js user, ${this.name}`)
}

// console.log(myObject.greeting())
// console.log(myObject.greetingTwo())

const dynamicKey = "keyname"
const symVal = Symbol("hello")

const object1 = {
    name1: "pratik",
    age_year:22,
    [symVal]:"pratik@44",
    3 : "any number",
    " ": "Empty String",
    rand : Math.random(),
    arr : [1,2,3,4],
    obj : {college:"Aissms",uni:"SPPU"},
    myFun : function() {
        console.log(`${this.name}`)
    },
    keyname : "value for dynamic key",
    "sir-name" : "jagtap"
}

console.log(object1.name1)
console.log(object1["name1"])


console.log(object1.age_year)
console.log(object1["age_year"])


console.log(object1.symVal)
console.log(object1[symVal])


// console.log(object1.3)
console.log(object1["3"])


// console.log(object1." ")
console.log(object1[" "])


console.log(object1.rand)
console.log(object1["rand"])


console.log(object1.arr)
console.log(object1["arr"])


console.log(object1["obj"])
console.log(object1.obj)


console.log(object1.myFun())
console.log(object1["myFun()"])


console.log(object1.dynamicKey)
console.log(object1[dynamicKey])


// console.log(object1.sir-name)
console.log(object1["sir-name"])