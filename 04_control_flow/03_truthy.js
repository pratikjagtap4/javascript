const username = "pratik@gmail"

if (username) {
    // console.log("Got username");
} else{
    // console.log("dont got username");
}


// falsy values: false , 0 -0, "",0n (bigInt), null , undefined , NaN

// truthy values: "0","false"," "(space), [],{},function(){}(empty function)

// checking an empty array
const user = []

if(user.length===0)
{
    // console.log("true");
}

// checking object is empty or not

const users = {}

if(Object.keys(users).length===0){
    // console.log("true");
}