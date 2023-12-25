let a=100
if(true){
   let a=30;
}
// console.log(a)


var b=100
if(true){
   var b=40
}
// console.log(b);


function one(){
    const name = "pratik";

    function two(){
        const channel = "code with pratik"
        // console.log(`Hi, my name is ${name}, and my youtube channel is ${channel}`);
    }
    two()
    // console.log(channel);
}
one()
// console.log(name)


let username
if(true)
{
    let website
    username="pratik"
    if(username=="pratik")
    {
        website = "code with pratik"
        // console.log(`Hi, my name is ${username}, my channel is ${website}`);
    }
    // console.log(website);
}
// console.log(username);
// console.log(website);

// **************************************** hoisting ********************************

// console.log(add(5))
function add(num){
    return num+1
}

// console.log(two(5));
var two = function(num){
    return num+2
}

// console.log(num)
let num = 10


console.log(val);
var val=10

