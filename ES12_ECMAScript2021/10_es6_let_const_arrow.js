/* 
ES6 - ECMAScript 2015
1. var - scope is global always
2. let - scope is not global always
3. const - cannot be changed once assigned
4. Arrow function
*/

// These are all variable declaration keywords
// if we declare varaible with var keyword within in any block, it can be accessed globally. 
// if we declare varaible with let keyword within in any block, it can NOT be accessed outside of the block. 
// if we declare varaible with const, we cannot re-assign value to it

// Arrow function - It is most important concept.It is pretty simple. It is all about simplyfying the declaration of the function
// Function we are never going to modify. That is why we will always declare with const keyword
const user = () => console.log('Hello')
user();

const user1 = (num1) => {return num1+1};
let output = user1(10);
console.log(output);


const user2 = (num1,num2,num3) => {return num1+num2+num3};
output = user2(10,10,10);
console.log(output);


