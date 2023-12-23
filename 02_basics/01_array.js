// const myarray = [1,2,3,4,5]
const myarray = new Array(1,2,3,4,5)

// console.log(myarray.length)
// ***********************************

myarray.push(6)
myarray.push(7)
// let mynewarray = myarray.push(8)

// console.log(myarray)
// console.log(mynewarray)
// **************************************************

myarray.pop()
myarray.pop()
// let myNewArray = myarray.pop()

// console.log(myarray)
// console.log(myNewArray)

// ***************************************************

myarray.unshift(0)
// let myNewArray = myarray.unshift(10) // returns number of array elements it shifts

// console.log(myarray)
// console.log(myNewArray)

// **********************************************************************

myarray.shift()
// let myNewArray = myarray.shift()
// console.log(myarray)
// console.log(myNewArray)

// **********************************************************************

let newarray = myarray.join()
// console.log(newarray)

// ********************************************************************

// slice and splice

const array = new Array(1,2,3,4,5)
console.log("A", array)

let newArray = array.slice(1,3)
console.log(newArray)
console.log("B", array)

let mynewarray = array.splice(1,3)
console.log(mynewarray)
console.log("C",array)

