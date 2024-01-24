//  if , if else , nested if else 
// > , < , >=, <= , == ,!=,===

const isUserLoggedIn = true 

if(isUserLoggedIn){
    // console.log("user is logged in!");
}

const temperature = 41

if(temperature > 50){
    // console.log("temperature is greater than 50");
} else{
    // console.log("temperature is less than 50");
}

const score = 200

if(score>100){
    let power = "fly"
    // console.log(`power is: ${power}`);
}
// fly cant be accessed here

const balance = 1000

// if (balance>500) console.log("test 1"), console.log("test 2"); not readable

if (balance < 500) {
    // console.log("balance is less than 500");
}
else if(balance < 750)
{
    // console.log("balance is less than 750");

}
else if(balance < 900)
{
    // console.log("balance is less than 900");
}
else {
    // console.log("balance is less than 1200");
}

const userSignedIn = true
const debitCard = true

if(userSignedIn && debitCard){
    // console.log("Allow to buy Product!");
}

const loggedInFromGoogle = true
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    // console.log("Allow to Logged in");
}

// nullis coalescing oeprator (??) for null and undefined

// let val1 = 10 ?? 15
// let val1 = null ?? 20
// let val1 = 10 ?? 20
// let val1 = null ?? undefined
let val1 = null ?? undefined ?? 20
console.log(val1);

// ternary operator

// condition ? true :false

const price =100

// price > 80 ? console.log("greater than 80"):console.log("less than 80");;