var arr1=[10,20,30,40,50];
// map syntax : array.map((element)=>{console.log(element)})
arr1.map((elm)=>{console.log(elm)});

// fliter syntax : variable.filter((element)=>condition)
// This will help to filter based on condition and get the required value
var arr2=[10,20,30,40,50];
let filteredval = arr2.filter((elm)=>elm>20);
console.log(filteredval);
filteredval.map((elm)=>console.log(elm));