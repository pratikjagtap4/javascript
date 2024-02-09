const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve()
        // console.log("one")
        // console.log("one")
        // console.log("one")
        // console.log("Async task 1")
    }, 2000)
})

promiseOne.then(() => {
    // console.log("promise consumed successfully")
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task 2")
        resolve()
    }, 2000)
}).then((result) => {
    // console.log("promise 2 consumed succesfully")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "pratik", email: "pj@gmail.log", DOB: 4, qualification: 'B.E' })
    })
})

promiseThree.then((user) => {
    // console.log(user)
})

function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({ username: "pratik", email: "pj@gmail.log", DOB: 4, qualification: 'B.E' })
            // console.log(data)
        })
    })
}

getData(2).then((user) => {
    // console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = Math.floor(Math.random() * 10 + 1);

        let isError = error > 2 ? true : false

        if (true) {
            resolve({ username: "pratik", email: "pj@gmail.log", DOB: 4, qualification: 'B.E' })
        }
        else {
            reject("Error")
        }
    }, 1000);
})

const uname = promiseFour.then(function (user) {
    // console.log(user)
    // console.log(this)

}).then(function () {
    // console.log(this)
})
    .catch((error) => {
        // console.log("E:", error)
    })


    const promiseFive = new Promise(function(resolve , reject){
        setTimeout(()=>{
            let error = Math.floor(Math.random()*10+1)
    
            let isError = error >5 ? true:false
    
            if(true){
                resolve({username:"pratik",age:22})
            }
            else{
                reject("promise is rejected")
            }
        },1000)
    })
    
    async function consumePromise(){


        try {
            const response = await promiseFive
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    // consumePromise()


    

    // async function getAllUsers(){
    //     try{
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //         const data = await response.json();
    //         console.log(data);
    //     } catch(error){
    //         console.log("E:" , error);
    //     }
    // }

    // getAllUsers()


const data = fetch('https://jsonplaceholder.typicode.com/users')

data.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("E:" , error)
})