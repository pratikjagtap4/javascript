// for loop

for (let i = 0; i < 10; i++) {
    // const element = array[i];
    if(i==5)
    {
        // console.log(`${i} is best number`);
    }
    // console.log(i);
    
}

for (let i = 1; i <=10; i++) {

    // console.log(`Table of ${i} is`);

    for (let j = 1; j <=10; j++) {

        // console.log(`${i} * ${j} = ` + i*j);
        
    }
    
}

let count = 0
for (let i = 0; i <=20; i++) {

    if(i%3==0 && count <5){
        console.log(`${i} is divisible by 3 , count is ${count}`);
        count=count+1;
    }
    if(count==5){
        break
    }
}
