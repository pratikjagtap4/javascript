// Q1 Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :

const isString = function ( str){

    if(str.constructor === String)
    {
        console.log(`${str} is a string`);
    }
}

isString("pratik jagtap")