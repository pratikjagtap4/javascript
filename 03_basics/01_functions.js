function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2)
}
function mulTwoNumbers(number1 , number2){
    // console.log(number1 * number2)
}

let result = addTwoNumbers(4,"4")
let resultMul = mulTwoNumbers(4,"4")
// 
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
let sum = 0;

function cartPrice(...num){
    for (const iterator of num) {
    sum=sum+iterator
    }
    return sum
}

// console.log(cartPrice(200,300,400,500))

function cartTotalPrice(val1,val2,...num)
{
    return num
}

// console.log(cartTotalPrice(100,200,300,400));

const user ={
    name:"pratik",
    age:22
}

function handleObject(anyobject){
    return `age of ${anyobject.name} is ${anyobject.age}`
}

// console.log(handleObject(user));

const factorial = function fac (num){
    return num<2 ? 1:num*fac(num-1)
}
// console.log(factorial(5))
// the name fac is local name of function and it is accessible only within scope of function, 
//outside function we can not acces the using function using local name i.e fac
// **********************************

// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
  
//   outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
//   console.log(inside(5)); // 8
//   console.log(outside(3)(5));


let SUM= 10

const addition = function(num){
    return SUM = SUM +num

}

// console.log(addition(10))

function outside(x){
    function inside(y){
        return x+y;
    }
    return inside;
}

const fnInside = outside(10)

const total = fnInside(5)

// console.log(`total is ${total}`)

// ************************** arguments list ************

function addString(separator){
    let result = ""

    for(let i = 1; i<arguments.length; i++){
        result = result + arguments[i] + separator
    }
    return result
}

// console.log(addString("-","pratik","vinod","jagtap"))

let a =30 
if(true){
    a = 100
    // console.log("inner a:" , a)
}

// console.log("outer a:" , a)

