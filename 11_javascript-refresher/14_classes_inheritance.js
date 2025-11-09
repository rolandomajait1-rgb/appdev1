
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}


class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}


const p1 = new Person("Alice");
p1.sayHello();

const s1 = new Student("Rolanz");
s1.sayHello();
s1.study();