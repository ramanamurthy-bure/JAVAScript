// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires
//syntax : setTimeout(action,timedelay)
console.log("First Message");
setTimeout(()=>console.log("Second Message will be displayed after 1000 milli seconds"),1000);
setTimeout(()=>console.log("Third Message"),2000);
setTimeout(()=>console.log("Fourth Message"),3000);
setTimeout(()=>console.log("Fifth Message"),1500);

//OutPut
/*
First Message
Second Message will be displayed after 1000 milli seconds
Fifth Message
Third Message
Fourth Message
*/

