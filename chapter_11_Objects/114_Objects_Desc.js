const user = { name1: "Alice", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

console.log("**************");

// Rename Variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

console.log("**************");

// Default values
const { country = "USA" } = user;
console.log(country);

console.log("**************");

const data = { user: { name: "john", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;
console.log(data);