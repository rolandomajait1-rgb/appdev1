let hobbies = ["Reading", "Gaming", "Cycling"];
hobbies.map(hobby => console.log(hobby));


let student = { name: "Alice", age: 20 };
let { name, age } = student;
console.log(name, age);


let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];

console.log(newNumbers);