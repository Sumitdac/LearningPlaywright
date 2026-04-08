const user = {
    name: "John",
    age: 30,
    email: "sum.dac@gmail.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

console.log("**********");

// Dynamic property access
const key = "email";
console.log(user[key]);

const key1 = "age";
console.log(user[key1]);

console.log("**********");

// Adding / modifying properties

user.city = "NYC";
user.age = 31;

console.log(user);