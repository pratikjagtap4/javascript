function addition(num1, num2){
    console.log(num1+num2)
}

// addition.power = 10;
// addition.lavda = 80
// addition.lasan = 75
// console.log(addition(4,5))
// console.log(addition.power)
// console.log(addition.lasan)
// console.log(addition.lavda)

// console.log(addition.hasOwnProperty("power"))  //  here addition which is originally a function is treated as  a object and bancho is treated as its property  

console.log(addition.prototype)
addition.prototype.username = function(){
    this.name= "pratik"
}
addition.prototype.hellopratik = function(){
    console.log(`Hello ${this.name}`)
}
console.log(addition.prototype)
const hellobro = new addition(4,5)

hellobro.hellopratik()

function createUser(pName , price){
    
    this.pName = pName
    this.price = price
}
createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(this.price)
}
const chai = new createUser("tea" , 25)


chai.increment()
chai.printMe()