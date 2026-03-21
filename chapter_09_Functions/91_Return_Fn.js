// Return values

function getStatus(code) {
    if (code >= 200 && code < 300) return "sucess";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));

// Returns nothing - undefined
function logTest(name) {
    console.log(`Running : ${name}`);
    // no return statement
}

console.log(logTest("Hi this is a log")); // undefined

// Return multiple values via array or object

function aaa() {
    return [2, 3, 4, 5, 6];
}