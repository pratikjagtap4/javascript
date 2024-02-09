function getVal(data,getNextVal ){
    setTimeout(() => {
        console.log(data)
        if(getNextVal){
            getNextVal()
        }
        else{
            console.log("done with this shit")
        }
    }, 2000);
}

getVal(3,()=>{
    getVal(4,()=>{
        getVal(5,()=>{
            console.log("callBack Hell")
        })
    })
})