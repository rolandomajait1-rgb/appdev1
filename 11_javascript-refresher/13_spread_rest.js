
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);


const user = { name: "Rolanz", age: 22 };
const extendedUser = {...user, country: "Philippines" };
console.log(extendedUser);


function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));