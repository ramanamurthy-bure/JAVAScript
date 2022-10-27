// Abstraction
// It is nothing but hiding interal process and showing only essential things to the user.
// ATM is a real time example of Abstraction
// The main purpose of the abstraction is hiding the unnecessary details from the user
class ATM{
    constructor(withdraw)
    {
        this.balance = 1000;
        this.minimum = 500;
        this.withdraw = withdraw;
    }

    getAmount()
    {
        if(this.balance - this.withdraw >= this.minimum)
        {
            console.log("Withdraw Successful");
        }
        else{
            console.log("Withdraw Failed");
        }        
    }
}

let objatm = new ATM(1000);
objatm.minimum = 0; 
// Since abstraction is not implemented we can able to override the value from outside. This is a drawback.
objatm.getAmount();