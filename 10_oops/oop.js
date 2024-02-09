const userDetails = {
    username : "pratik",
    age:22,
    class:"B.E",
    getdetails : function(){
        console.log(this)
    }
}

// console.log(userDetails.username)
// console.log(userDetails.getdetails())
function useThis(){
    console.log(this)
}

// useThis()

function user (username , age , sirname){
    this.username = username ;
    this.age = age;
    this.sirname = sirname
    
}

const userOne = new user("partik", 22 , "jagtap")
const userTwo = new user("tushar" , 23 , "jambhulkar") 
console.log(userOne)
console.log(userTwo)

