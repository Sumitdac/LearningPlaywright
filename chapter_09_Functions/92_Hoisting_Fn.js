// Hoisting
// Function declarations are hoisted - 
// you can call them before they're defined.
// Function expressions and arrow function are NOT.

greet("Alice");
function greet(name) {
    return 'Hello, ${name}!';
}

sayHi("Bob"); // TypeError: sayHi is not a function

const sayHi = function (name) {
    return `Hi, ${name}!`;
};
