// Importing default and named exports
import greet, { myInfo } from "./15_modules_export.js";

console.log(greet());
console.log(`My name is ${myInfo.name} and I am ${myInfo.age} years old.`);