/* 
ES6 - ECMAScript 2015
classes
*/

class User1{
    admin()
    {
        console.log('From admin method');
    }
}

let objuser1 = new User1();
objuser1.admin();


class User2{
    constructor(msg)
    {
        this.msg = msg;
    }
    admin()
    {
        console.log(this.msg+" Admin");
    }
}

let objuser2 = new User2('Hi');
objuser2.admin();