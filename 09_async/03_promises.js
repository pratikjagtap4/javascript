// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("promise consumed successfully")
//     },2000)
// })  
// console.log("Hello")

const promiseOne = new Promise((resolve , reject)=>{
    setTimeout(() =>{
        let errorCond = Math.floor(Math.random()*10 +1)
  
        if(errorCond >7 ){
            resolve("promise resolve")
        }
        else{
            reject("promise rejected")
        }
    },1000)  
  })
  
  
  promiseOne.then((value)=>{
      const user = {
        username:"pratik",
        getuser:()=>{
          console.log(this.username)
        }
      }
      user.getuser()
      // console.log(this.one)
      console.log(value)
    },(error)=>{
      console.log(error)
  })



  