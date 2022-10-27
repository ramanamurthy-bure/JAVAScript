// Inheritance
// It is a mechanism in which one class acquires the property of another class
class Parent{
    getMobile()
    {
        console.log("Iphone 11");
    }
}

class Child extends Parent{
    
}

let objChild = new Child();
objChild.getMobile(); // Here we are able to access the parent class method using child class object