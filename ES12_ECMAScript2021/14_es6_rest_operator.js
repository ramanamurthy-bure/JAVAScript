/* 
ES6 - ECMAScript 2015
rest operator = rest of values
*/

function user(name,...remaing) // Here function declared with rest operator ... and remainig is not keyword it is arg name.
{
    console.log(name+":"+remaing);
}
user('john',25,'raman@gmail.com')