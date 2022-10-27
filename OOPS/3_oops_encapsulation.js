// Encapsulation
// It is nothing but binding both data variables and methods(behavior) within a single object called class.
// It is a mechanism of bundling data variables and methods together & hides them from other classes

class Person{
    constructor(name,age,salary)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

    getSalary()
    {
        return this.salary;
    }
}


let objPerson = new Person('John',25,35000);
console.log(objPerson.getName());
console.log(objPerson.getAge());
console.log(objPerson.getSalary());
