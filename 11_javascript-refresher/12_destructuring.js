// Object destructuring
const person = {
    name: "Rolanz",
    age: 22 
};
const { name, age } = person;
console.log(name, age);


const hobbies = ["reading", "coding"]; 
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


function printName({ name }) {
    console.log(name);
}

printName(person);