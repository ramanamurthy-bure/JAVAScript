// setTimeout 
console.log("#############################################")
for(var i=0;i<5;i++)
{
    console.log("check point")
    setTimeout(()=>console.log(i),1000);
}
// Here the setTimeout function callback isn't triggerred until the for loop execution has completed. When the for loop has finished
// executing the value of i is 5. Now when the setTimeout call begins to execute it uses the last value of i which is 5.Hence 5 is printed 
// in all the setTimeout callbacks

/* 
check point
check point
check point
check point
check point
5
5
5
5
5
*/

for(var j=1;j<=5;j++)
{
    // setTimout alwasys expects individual scope level variable
    let k=j; //Here using let we will have new seperate scope level variable everytime. So it will wait for 1000 milliseconds and print k
    setTimeout(()=>console.log(k),1000);
}

/* 
1
2
3
4
5
*/

for(let l=1;l<=5;l++)
{
    setTimeout(()=>console.log(l),1000*l);
}