const name = "pratik"
const username = new String("pratiiik4")

// console.log("Hi, my name is " +name + "and my instagram name is " + username)
// console.log(`Hi , my name is ${name} and my instagram username is ${username}`)

// console.log(name[0]);

// console.log(username.length)
// console.log(username.toLowerCase())
// console.log(username.toUpperCase())
// console.log(username.charAt(2))
// console.log(username.indexOf('i'))

let newname = username.substring(2,5)
// console.log(newname)
// console.log(username)

let anothername = username.slice(0,-1)
// console.log(anothername);


let newstring = new String("        pratik       ")
// console.log(newstring.length)

let string1 = newstring.trimStart()
let string2 = newstring.trimEnd()
// console.log(string1.length)
// console.log(string2.length)

let url = "https://pratikjagtap/linkedIn%20#50profile"
let url2 = url.replace("%20#50", "-")
// console.log(url);
// console.log(url2)
// console.log(url.includes("shivam"));

let quote = "life is good , enjoy it."
// console.log(quote.split(" ",4));

// console.log(quote.at(5))

// console.log(quote.lastIndexOf("i"))

// console.log(quote.substr(0,5));
console.log(quote.substring(0));
console.log(quote.slice(0));

