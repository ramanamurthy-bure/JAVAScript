/* 
Fundamental Topics
1. Variable Declaration
2. Data Types
3. Arrays and Objects
4. Functions
5. Conditional Statement
6. Looping concept
*/

//Functions
// 1. function without args
function funcname1(){
    //block of code - Here we can mention the code that we want to execute when the function call happens
    console.log("Hello");
}
funcname1();

// 2. function with args
function funcname2(num1){
    console.log(num1);
}
funcname2(10);


// 3. function with args and return type
function funcname3(num1,num2){
    return num1+num2;
}
let sumval = funcname3(10,5);
console.log(sumval);