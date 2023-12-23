let date = new Date()

// console.log(date)
// console.log(date.toString());
// console.log(date.toDateString())
// console.log(date.toLocaleString())

// let myDate = new Date(2023,0,12)
// let myDate = new Date(2013,0,2,5,8) // while writing single didgit date it stats from 0= jan 
// let myDate = new Date()
// console.log(myDate.toLocaleString("default", {weekday:"long"}))

// console.log(myDate.getTime());

// let mydate2 = new Date(2023,11,24)
// console.log(mydate2.getDate());
// console.log(mydate2.getFullYear());
// console.log(mydate2.getDay());


for(year = 2014 ; year <= 2050 ; year++)
{
    let myDate = new Date(year , 0, 1)

    let day = myDate.getDay()
    if(day === 0)
    {
        console.log(`The 1St January of ${year} is sunday`)
    }

}

// console.log(myDate.getTime()- mydate2.getTime())



