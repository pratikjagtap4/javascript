const arr = ["C", "Cpp","Java","JavaScript","python"]

arr.forEach( function (item) {
    // console.log(item)
});

arr.forEach( (item) => {
    // console.log(`My favourite Subject is ${item}`)
} )

const favSubject = (item , index) => {
    // console.log(`favourite SUbject is ${index}  and its index is ${index}`);
}

arr.forEach(favSubject)

arr.forEach((item,index,arr) =>
{
    // console.log(item,index,arr)
})


// [{},{},{},{}]

const languages = [
    {
        languageName:"JavaScript",
        languageFile:"js"
    },
    {
        languageName:"Java",
        languageFile:"java"
    },
    {
        languageName:"Python",
        languageFile:"py"
    },
    {
        languagename:"Cpp",
        languageFile:"C++"
    }
]

languages.forEach( (item) =>
{
    console.log(item.languageFile)
})