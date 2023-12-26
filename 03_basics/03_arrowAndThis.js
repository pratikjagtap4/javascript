const user = {
    name:"pratik",
    welcomeMessage: function()
    {
        let lastname = "jagtap"
        console.log(`hello ${this.name} ${lastname}`); // this is must use else it throws an error
        console.log(this);
    }
}

// user.welcomeMessage()
user.name="jagtap"
// user.welcomeMessage()

// console.log(this)

function add(){
    let name="pratik"
    console.log(name);
    console.log(this);
}
// add()

// ********************** Arrow Function *********************
let addTwo = (num1,num2) => {
    return num1+num2         // inclusive arrow function as it includes return keyword and brackets
}

// console.log(addTwo(4,5))

let addNum = (num1,num2) => (num1+num2)  //exclusive arrow function (as it does not include return keyword and brackets)

// console.log(addNum(7,8));

