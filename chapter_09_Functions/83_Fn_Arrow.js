// Arrow Function (ES6)

const greet = function (name1) {
    return `Hello, ${name1}!`;
}

// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use equal to arrow (=>)
const greet1 = (name2) => `Hello, ${name2}!`;

console.log(greet("Bob"));
console.log(greet1("Bob"));

// arrow function generally works whenever you have a single line.

const doubleIt = n => n * 2;
console.log(doubleIt(10));

// No params  - no parameter required
const getEnv = () => "Staging";
console.log(getEnv());

// Suppose we have a multi-line. Can we use arrow function everywhere?
// Multi-line - needs curly braces + return
const getResult = (score) => {
    if (score >= 70) return "pass";
    return "fail";
};

console.log(getResult(75));
console.log(getResult(55));