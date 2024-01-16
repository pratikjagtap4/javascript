// 5. Write a JavaScript function to convert a string into abbreviated form.

const abbString =  function ( str){
    let name = str.trim().split(" ")
    
    if(str.length>1){
        return (name[0] + " " + name[1].charAt(0) + "." )
    }
    return name[0]
}

console.log(abbString("pratik jagtap"))