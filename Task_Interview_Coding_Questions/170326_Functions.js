

console.log(greet("Alice"));
function greet(name) {
    return `Hello, ${name}!`;
}

console.log("************************************************");

//console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";

console.log("************************************************");


function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;
}
analyze();

function makeCounter() {
    let count = 0;
    return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

//Which is a pure function? 
function log(msg) { console.log(msg); }
function add(a, b) { return a + b; }
function getTime() { return Date.now(); }
function push(arr, val) { arr.push(val); return arr; }

function test(...args) {
    return args.length;
}
test("login", "pass", 200, true);

const obj = {
    env: "staging",
    getEnv: () => {
        return this.env;
    }
};
console.log(obj.getEnv());

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);


function run(fn) {
    return fn("Login");
}
console.log(run(name => `Running: ${name}`));

function outer() {
    let x = 10;
    function inner() {
        let x = 20;
        return x;
    }
    return x + inner();
}
console.log(outer());
