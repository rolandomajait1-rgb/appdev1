const aboutMe = {
    name: "Rolando",
    age: 21,
    course: "Web Development",
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am studying ${this.course}.`);
    }
};
aboutMe.introduce();

aboutMe.hobby = "dancing";
console.log(aboutMe);