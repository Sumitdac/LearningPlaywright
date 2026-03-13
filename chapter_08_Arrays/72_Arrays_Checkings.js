// Checking Arrays

// Checking if something IS an array

let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a");
console.log(result1);
let result2 = Array.isArray(["a", 1, "hello"]);
console.log(result2);

// every
console.log("*****Every*****")
let r = [80, 90, 85].every(s => s >= 70);
console.log(r);
let r1 = [80, 90, 85].every(s => s < 70);
console.log(r1);

// some - At Least one must pass
console.log("*****Some*****")
let r2 = [80, 60, 85].some(s => s < 70);
console.log(r2);
let r3 = [80, 90, 85].some(s => s < 70);
console.log(r3);
