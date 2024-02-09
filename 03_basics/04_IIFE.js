console.log("Before IIFE");
(function add(num1, num2) {
    let result = num1 + num2;
    console.log(num1 + num2);
})(4, 5);

console.log("Before arrow function IIFE");
((name) => {
    console.log(`hello ${name}`);
})("pratik");

console.log("Before addition function");
const addition = (num1, num2) => {
    return num1 + num2;
};
const result = addition(7, 8);
console.log(result);


(function fun(num1, num2) {
    let result = num1 + num2;
    console.log(result);
})(4, 5);


