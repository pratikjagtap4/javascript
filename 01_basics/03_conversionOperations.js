// ******************* 1) conversion to number **********************

// a) string to number 
let score = "33"
let numberVal = Number(score)

// console.table([typeof score , typeof numberVal , numberVal])

// b) string to number 
let score2 = "33abc"
let numberValue = Number(score2)

// console.table([score2 , typeof score2 , typeof numberValue , numberValue])

// c) boolean to number 
let isLoggedIn = true
let numberIsLoggedIn = Number(isLoggedIn)

// console.table([isLoggedIn , typeof isLoggedIn , typeof numberIsLoggedIn , numberIsLoggedIn])

// d) boolean to number 
let temp = null
let numberTemp = Number(temp)

// console.table([temp , typeof temp , typeof numberTemp , numberTemp])

// d) undefimed to number 
let undef
let numberundef = Number(undef)

// console.table([undef , typeof undef , typeof numberundef , numberundef])

//  ********************** 2) to boolean *********************

//  a) number to boolean

let a = 15
let b = -2

let boolA = Boolean(a)
let boolB = Boolean(b)

// console.table([a, typeof a , boolA , typeof boolA])
// console.table([b, typeof b , boolB , typeof boolB])


//  b) string to boolean

let name = ""
let sirname = " jagtap "

let boolname = Boolean(name)
let boolsirname = Boolean(sirname)

// console.table([name , typeof name , boolname , typeof boolname])
// console.table([sirname , typeof sirname , boolsirname ,  typeof boolsirname])

// c) null to boolean

let temperature =undefined
let booltemp = Boolean(temperature)

// console.table([temperature, typeof temperature , booltemp , typeof booltemp])

// **************** 3) to string ***********************

// a) numbner to string

let num =33
let strnum = String(num)

// console.table([num , typeof num , strnum , typeof strnum]);

// b) boolea to string 

let condition = true
let strcon = String(condition)

// console.table([condition , typeof condition , strcon , typeof strcon])

//  c) null to string

let var1 = undefined
let val2 = String(var1)

console.table([var1 , typeof var1 , val2 , typeof val2])