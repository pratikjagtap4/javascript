// "use strict"
const name = "swapnil"
const user = {
    name:"pratik",
    welcomeMessage: function()
    {
        let lastname = "jagtap"
        // console.log(`hello ${this.name} ${lastname}`); // this  must be use else it throws an error
        // console.log(this);
    },
    welcome : () => (console.log(`hello ${this.name}`))
}

user.welcomeMessage()
user.name="jagtap"
// user.welcomeMessage()
// console.log(user.welcome())
// console.log(this)
// user.welcome();

function add(){
    let name="pratik"
    // console.log(name);
    // console.log(this);
}
// add()

// ********************** Arrow Function *********************
let addTwo = (num1,num2) => {
    return num1+num2         // inclusive arrow function as it includes return keyword and brackets
}

// console.log(addTwo(4,5))

let addNum = (num1,num2) => (num1+num2)  //exclusive arrow function (as it does not include return keyword and brackets)

// console.log(addNum(7,8));

let fun = (name) => {
    // console.log(this.name)
}
// fun("pratik")

const laptop1 = {
    cpu:"i9",
    ram:16,
    company:"HP",
    getConfig() {
        console.log(this.company)
    },
    compare(other){
        if(this.cpu>other.cpu)
            console.log("laptop 1 is faster")
        else
            console.log("laptop 2 is faster")
    }    
}
const cpu = "pratik" 
const laptop2 ={
    cpu: "i11",
    ram : 12,
    company: "dell",
    getConfig() {
        // console.log(laptop1.company)
        console.log(cpu)
    }
}
// laptop1.getConfig()
// laptop1.compare(laptop2)
// laptop2.getConfig()

// console.log(this)

function compare(){
    let name ="pratik"
    console.log(this.name)
}
// compare()


const user4 ={
    name:"pratik",
    age:22,
    greet(){
        // console.log("line 85",this);

        function sayHello(){
            // console.log("hello");
            // console.log("line 89",this);
        }
        sayHello();
    },

}

// user4.greet();

function fun2(){
    const myName  = {
        name:"pratik",
        age:22,
        fun(){
            // console.log("line 99" , this.name)
        }
    };
    myName.fun()
}
// fun2()
// fun2()


// ************************************** This Keyword******************

// console.log(this)

// function sum (){
//     // console.log(this)
// }

const user8 = {
    name : "pratik",
    sum: function(){
        console.log("line 4",this);

        function add(){ 
            console.log("line 6",this)
            nestedArrow = () =>{
                console.log("new nested arrow line 8 ",this)

            }
            nestedArrow()
        }
        con = () => {
            console.log("line no 13",this);
            innerArrow = () =>{
                console.log("line no 15",this);

            }
        }
        add();
        con();
        innerArrow()
    },
    arrowfun : ()=>{
        console.log("line no 24",this)
    }
}
user8.sum()
user8.arrowfun()


arrow = () => {
    console.log(this)
}
arrow()

function itsnotfun (){
    arrow = () => {
        console.log("iner arrow" , this)
    }
    arrow()
}
// arrow()
itsnotfun()