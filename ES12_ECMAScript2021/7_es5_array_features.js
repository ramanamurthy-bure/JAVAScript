/* 
Array Featurs
1. isArray()
2. map()
3. fliter()
4. forEach()
5. every()
6. some()
7. indexOf()
8. lastIndexOf()
*/

//1. isArray()
var data = [1,2,3,4,5];
console.log(Array.isArray(data)); //true

//2. map()
var output = data.map(function(elm)
{
    console.log(elm)
    return elm+1;
})
console.log(output);

//3. map()
var output = data.filter(function(elm)
{
    return elm>3;
})
console.log(output);

//4. map()
data.forEach(function(elm)
{
    return console.log(elm);
})

//5. every() // This will return true when condition is true for every element
// Example-1
var data = [1,2,3,4,5];
var output = data.every(function(elm)
{
    return elm<6;
})
console.log(output);//true

// Example-2
var data = [0,1,2,3,4,5];
var output = data.every(function(elm)
{
    return elm>0;
})
console.log(output);//false

// 6. some() // This will return true even if one of the condition is true
// Example-2
var data = [0,1,2,3,4,5];
var output = data.some(function(elm)
{
    return elm>0;
})
console.log(output);//true

// 7. indexof()
var data = [1,2,3,4,5,6];
console.log(data.indexOf(4));//3

// 8. lastindexof()
var data = [1,2,3,4,5,6,7,8,9,4];
console.log(data.lastIndexOf(4));//9





