console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)

// undefined vs null
let x;
let y = null;
console.log("x is:", x); // undefined
console.log("y is:", y); // null

// Regular function vs arrow function in object
let obj = {
    name: "Test",
    regularFunc: function() {
        console.log("Regular function:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow function:", this.name);
    }
};

obj.regularFunc();
obj.arrowFunc(); 


let arr1 = [1, 2, 3];
let arr2 = arr1; 
arr2.push(4);
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // new copy
arr4.push(4);
console.log("arr3:", arr3); // [1, 2, 3]
console.log("arr4:", arr4); // [1, 2, 3, 4]