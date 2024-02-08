const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("promise consumed successfully")
    },2000)
})