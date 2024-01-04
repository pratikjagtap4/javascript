// ********** Primitive d

// Number , String , Boolean , null , udefined , Symbol , BigInt 

const score = 100  // it is integer but  treated as number only 
const percentage = 100.3 // it is float but treated as number only 

const isloggedIn = true 
const temperature = null 
let mentakHealth;

const name = "pratik"
const bigNumber = 999999999999999999n

// console.log(bigNumber)

const id=Symbol(score)
const anId = Symbol(score)

// console.log(id==anId)
// console.log(typeof id)


//  ***************** reference type / non primitive *************

let obj ={
    "name":"pratik",
    "age":22,
    job:"vella"
}

// console.log(obj.job)

let friends =["dhananjay", "swapnil", "tushar"]
// console.log(typeof friends)

const myfunction = function()
{
    // console.log("Hello World")
}
myfunction()
// console.log(typeof myfunction)


//  **************************** Stack adn heap *******************

let instaid = "pratik"

let username = instaid
// console.log(username)
username = "jagtap"

// console.log(instaid)
// console.log(username)

//  all primitive data types are store in stack memory ... and a copy of their value is passed everytime


let object = {
    name:"pratik",
    age:22
}

let object2= object

object2.name =  "jagtap"

// console.log(object.name)
// console.log(object2.name)

