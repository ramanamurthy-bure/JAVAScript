// Optional chaining is a safe way to access nested object properties, even if the property doesn't exist.
let alert = require('alert');

let pets = {
    cat:{
        name:'Neo'
    }
}
alert(pets.cat.name);
// alert(pets.dog.name); //Type Error: Cannot read the property of undefined
alert(pets.dog?.name); // We will not get undefined error now as we used .? which is optional chaining operator

let user={
    admin(){
        console.log("I am from admin method.");
    }
}

user.admin?.();