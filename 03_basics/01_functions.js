function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2)
}
function mulTwoNumbers(number1 , number2){
    // console.log(number1 * number2)
}

let result = addTwoNumbers(4,"4")
let resultMul = mulTwoNumbers(4,"4")

// console.log("result:" , result)
// ***************************************************************

function addNumbers(num1,num2){
    return num1+num2
}

let Result = addNumbers(4,5)
// console.log("result:",Result);

function loginUserMessage(username){
    if(!username)
    {
        return "please enter valid username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function cartPrice(...num){
    return num
}

// console.log(cartPrice(200,300,400,500))

function cartTotalPrice(val1,val2,...num)
{
    return num
}

console.log(cartTotalPrice(100,200,300,400));

const user ={
    name:"pratik",
    age:22
}

function handleObject(anyobject){
    return `age of ${anyobject.name} is ${anyobject.age}`
}

console.log(handleObject(user));