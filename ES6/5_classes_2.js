class test{
    constructor(num1,num2){
        this.num1 = num1; // Here we this.num1 is local variable
        this.num2 = num2;  // Here we this.num2 is local variable
        // This is a keyword which denotes the varaible is belogs to this class
    }

    addition()
    {
        console.log("Sum of 2 no's :"+(this.num1+this.num2));
    }
}
new test(10,20).addition(); // Here we are calling addition method without creating seperate variable for object reference

let refobjtest = new test(2,3);// Here we are creating seperate variable for object reference
refobjtest.addition();// Here we are calling addition method useing the refernce variable created above
