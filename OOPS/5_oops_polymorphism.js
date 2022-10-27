// Polymorphism
// Poly(Many)+Morph(Form) = Many Forms
// It will allow us to perform a single action in different ways
class Parent{
    getMobile()
    {
        console.log("iPhone 11");
    }
}

class Child extends Parent
{
    getMobile()
    {
        console.log("iPhone 12");
    }
}

let objChild = new Child();
objChild.getMobile();

//Benefits of OOPS : 
// 1. We can re-use the code
// 2. Flexibility through polymorphism
// 3. Easier to troubleshoot
// 4. Code maintainability and readability

let objParent = new Parent();
objParent.getMobile();