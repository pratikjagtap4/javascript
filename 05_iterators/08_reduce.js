const {name} = "jagtap"

// console.log(name);

const arr = [, 1, 2, , 4]
// console.log(arr.length);

const myArray = [1]

const myTotal = myArray.reduce( (acc, curval)=>{
    // console.log(`accumulator : ${acc} and currentvalue : ${curval}`);
    return acc+curval
},1)

// console.log(myTotal);

const newArray = [1,2,3,4,5,6]

const myNewArray =newArray.reduce( (acc,curVal)=>(acc*curVal))

// console.log(myNewArray);

const shoppingCart  = [
    {
        product:"Shirt",
        price:599
    },
    {
        product:"Pant",
        price:899
    },
    {
        product:"T-shirt",
        price:299
    },
    {
        product:"Shoes",
        price:1299
    },
    {
        product:"Watch",
        price:499
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price ),0)

// console.log(`you have to pay total ${priceToPay}`);

// console.log(typeof Array.prototype);

