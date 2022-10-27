/* 
ES6 - ECMAScript 2015
default parameter
*/

function user(name,age=20) // Here function is declared with default parameter age
{
    console.log(name+" "+age);
}
user('john'); // john 20 -- Here the function is called without default parameter
user('john',24); // john 24 -- Here the function is called with default parameter