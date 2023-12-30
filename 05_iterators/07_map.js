const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num)=>
{
    return num+10
})

// console.log(newNums);



// ********************************** using forEach
const myNewNums = []

myNums.forEach( (num)=>{
    let val = num+10
    myNewNums.push(val)
} )


// console.log(myNewNums);

const values = [1,2,3,4,5,6,7]

let newValues = values.map( (num1,num2)=>{
    return num1+num2
})

// console.log(newValues);
const myNewValues = values.map( (num)=>(num*10)).map( (num)=>(num+1)).filter( (num)=>(num>40))

// console.log(myNewValues);

const lastName ='jagtap'
// console.log(lastName.split("a",2))