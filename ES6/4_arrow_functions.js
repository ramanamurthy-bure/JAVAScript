
// In ES5 JavaScript Engine, we need to declare the functions as below. 
function test(a,b)
{
    console.log('Hello World!');
    console.log("Sum of 2 no's inside function: "+(a+b))
    return a+b;
}
let sumVal = test(10,20); // Calling the function
console.log("Sum of 2 no's from return value "+sumVal)


// In ES6 JavaScript Engine,the above can be written in less no of code lines
// Creating arrow function. We can create function name with const keyword as functions are constants
const testarrowfuncsingleline = () => console.log('hello from arrow function'); // In Single line
testarrowfuncsingleline();

const testarrowfuncmultiline = () => {
    console.log('hello from arrow function');
    console.log('We can use {} to write multiple lines');
}
testarrowfuncmultiline();

const sumofnums = (num1,num2)=> num1+num2; // declaring the arrow function with multiple arguments. Here we need to use functional brackets
//let sumVal  = sumofnums(2,3); // not allowed to re-declare the same variable when it was declared with let keyword
sumVal  = sumofnums(2,3);// We can re-assign the value to same variable when it was declared with let keyword
console.log(sumVal);

const test1 = number => number+50; // declaring the arrow function with single argument. Here we no need to use functional brackets.
let sum1 = test1(10)
console.log(sum1); //60

