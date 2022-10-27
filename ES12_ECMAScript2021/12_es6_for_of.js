/* 
ES6 - ECMAScript 2015
For of
*/
const arr = [1,2,3,4,5,6];
for(const a of arr)
{
    console.log(a);
}


function user(name,age=20)
{
    console.log(name);
}
user('john');