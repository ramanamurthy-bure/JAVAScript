/* 
Fundamental Topics
1. Variable Declaration
2. Data Types
3. Arrays and Objects
4. Functions
5. Conditional Statement
6. Looping concept
*/

// Looping concept - To perfomr particular action multiple times based on a condition
//1. for loop
    // Syntax : for(statement1;statement2,statement3)
                    {
                        //block of code
                    }
    // Syntax : for(variable_declaration;condition,inc/dec)
for(var i=0;i<5;i++)
{
    console.log(i);
}
// Example: Count the sum of n numners
const n=10
var output = 0;
for(var i=1;i<=10;i++)
{
    output = output+i;
}
console.log("Output value: "+output)

//2. while loop
/* Syntax: 
    while(condition){
        // block of code
        // inc/dec
    }
*/

// Example: repeat until output val becomes 10
// while loop will execute while the condition becomes true
// while loop will stop once the condition becomes false
var output = 0;
while(output<=10)
{
    console.log(output);
    output++;
}






