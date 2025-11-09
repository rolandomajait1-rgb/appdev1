let foods = ["Pizza", "Sushi", "Burger"];

foods.push("Pasta");

foods.shift();

for (let food of foods) {
    console.log(food);
}

let likedFoods = foods.map(f => `I like ${f}`);
console.log(likedFoods);