// let name = "pratik"
// let sirname = "jagtap"
// let bdate = 4

// let fullname = name.concat(" ", sirname , " " , bdate)
// console.log(name);
// console.log(fullname);


const marvel_heroes = ["spiderman" , "thor", "ironman"]
const dc_heroes = ["superman", "flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// **********************************************

// let all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)
// console.log(all_heroes)

// ****************************

//  spread operator

let all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log((all_heroes));

// *********************************************************

let  array = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
let new_array = array.flat(3)

// console.log(new_array);

// *************************************************************

let object = "pratik jagtap is a good boy"
let newarray = Array.from(object)
// console.log((newarray));

let another_array = Array.from({name:"pratik"})
// console.log(another_array);

// *****************************************************************

let score1=100, score2= 200, score3=300

const marks = Array.of(score1,score2,score3)
console.log(marks);