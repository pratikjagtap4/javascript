const name = "pratik"
const username ="pratiiik      "

const myArray = [1,2,3,4,5]

const myObject = {
    username:"pratik",
    age:22
}

Object.prototype.sayPratik = function(){
    console.log(`Hello Pratik Bhau`)
}
const addition = function (){
    return 2
}

// myObject.sayPratik()
// myArray.sayPratik()
// username.sayPratik()
// addition.sayPratik()

// ******************** __proto__ ********************

const teacher = {
    subject : "history",
    name:"kabadi",
    isAvailable : true
}

const student = {
    class : "tenth",
    // __proto__ : teacher
}

// student.__proto__ = teacher

Object.setPrototypeOf( student , teacher)
    
console.log(student.subject)
console.log(student.isAvailable)
console.log(student.name)


// **************************** string method **************

String.prototype.trueLength = function(){
    console.log(`${this.trim().length}`)
}

const myName = "pratik        "

myName.trueLength()