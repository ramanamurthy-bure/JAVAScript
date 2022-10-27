const person = {
    name :"Ram",
    age : 25,
    mail : "ramana@gmail.com"
}
console.log(person.age); // Here we are accessing the age without destructuring

const {name,age,mail} = person; // Here we are destructuring
console.log(age); // We can access the age directly now using the age variable