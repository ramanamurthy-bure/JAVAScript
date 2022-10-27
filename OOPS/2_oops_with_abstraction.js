// Abstraction
// It is nothing but hiding interal process and showing only essential things to the user.
// ATM is a real time example of Abstraction
// The main purpose of the abstraction is hiding the unnecessary details from the user
class ATM{
    constructor(withdraw)
    {
        this.balance = 1000;
        this.withdraw = withdraw;
    }

    getAmount()
    {
        let minimum = 500; // This variable is now have scope within getAmount method only
        // and cannot be accessed or modified from outside
        if(this.balance - this.withdraw >= minimum)
        {
            console.log("Withdraw Successful");
        }
        else{
            console.log("Withdraw Failed");
        }        
    }
}

let objatm = new ATM(500);
console.log(objatm.minimum);//undefined
objatm.getAmount();