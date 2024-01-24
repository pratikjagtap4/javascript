// for of loop return values for key

const arr = [10,20,30,40,50]

for (const key of arr) {
    // console.log(key);
}

const greetings = "Namaste India!"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

const map = new Map()

map.set("IN","India")
map.set("Fr","France")
map.set("Ger","Germany")
map.set("Aus","Australia")
map.set("Nz","New Zealand")

// console.log(map);

    for (const [key, value] of map) {
    // console.log(key);
    // console.log(key + ":- " + value);
}

const myobj ={
    IN: "India",
    Fr: "France",
    Ger: "Germany",
    Aus: "Australia",
    Nz: "New Zealand"
}

// for (const key of myobj) {
//     // console.log(key);
// }


const array = [ 1,2,3,4,5,6]

for (let i of array) {
    i = i+1

    // console.log(i)    
}

const myMap = new Map

myMap.set("In","India")
myMap.set("Fr","France")
myMap.set("Aus","Australia")
// console.log(myMap)

for(const [key,value] of myMap)
{
    // console.log(key , ":-" , value)


}


const myarray = [1,2,3,4,5]

for (const i of myarray) {
    console.log(i)
    if(i == 2){
        break
    }
}

for(const i of myarray){
    console.log(i)
}