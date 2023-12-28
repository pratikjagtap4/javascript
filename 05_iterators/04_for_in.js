const Ger = Symbol("Germany")
const myObj ={
    IN: "India",
    Fr: "France",
    [Ger]: "Germany",
    Aus: "Australia",
    Nz: "New Zealand"   
}
console.log(typeof Ger);
for (const key in myObj) {
    // console.log(`short form for ${myObj[key]} is ${key}} `); for in loop does not iterate keys of Symbol type
}

const languages =["c","cpp","java","javascript"]

for (const key in languages) {
    // console.log(languages[key]);
}

const name ="pratik"

for (const i in name){
    // console.log(i)
}

// const myobj ={
//     IN: "India",
//     Fr: "France",
//     Ger: "Germany",
//     Aus: "Australia",
//     Nz: "New Zealand"
// }



// **************************************************
const map = new Map()

map.set("IN","India")
map.set("Fr","France")
map.set("Ger","Germany")
map.set("Aus","Australia")
map.set("Nz","New Zealand")

// console.log(map);
// console.log(map.get("Fr"));
// console.log(map.size);

// map.delete("Fr")
// console.log(map.size);
// console.log(map);
// *********************************************


for (const i in map)
{
    // console.log(i);     for in looop does not work with map

}