// Returns a Value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));

// Return nothing -> undefined
function logTest(name) {
    console.log(`Running : ${name}`);
    // no return request
}

let result = logTest("Login");
console.log(result);

console.log("***********************")
console.log(greet("Alice"));

function greet(name) {
    return `Hello, ${name}!`;
}
console.log("***********************")

// Expression - Not Hoisted
sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
};