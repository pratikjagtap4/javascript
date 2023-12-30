const languages = ["c","cpp","javascript","java","python"]

let newlang = languages.forEach((value)=>{
    return value
})
// console.log(newlang);  // for each loop doest not return anything

const arr = [10,20,30,40,50,60,70,80,90,100]

const newarr = arr.filter( (num)=>{
    return num>40
} )

// console.log(newarr);

// ***********************************
const myArr = []

arr.forEach((num) => {
    if(num>40)
    {
        myArr.push(num)
    }
})

// console.log(myArr);

// *********************************************/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = []

userBooks = books.filter( (bk) => {
    // return (bk.genre === "History")
    // return (bk.edition >=2010)
    return ((bk.genre ==="History" || bk.genre === "Science") && bk.publish >= 1995)
})

console.log(userBooks);



const fruits =["apple","banana","ananas","orange","grapes"]

function filteritems(arr, query)
{
    return arr.filter( (element) => {
        return element.toLowerCase().includes(query.toLowerCase())
    })
}

console.log(filteritems(fruits,"ap"));