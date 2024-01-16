// 7. Write a JavaScript function to parameterize a string.

const stringParameterized = function(str){
    let para_String = str.toLowerCase().replaceAll(" " , "-")
    console.log(para_String)
}

stringParameterized("Pratik Jgatp for Pune Maharashtra")