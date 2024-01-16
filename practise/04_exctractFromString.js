
// 4. Write a JavaScript function to extract a specified number of characters from a string.

const extractFromString = function(str,length){
    if((str.constructor)&&(length>0))
        console.log(str.slice(0,length));
}

extractFromString("pratik jagtap",5)