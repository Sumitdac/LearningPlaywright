// Exercise 2 — Spot the Bug

// What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
//let sorted = responseTimes.sort();
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Sorted Order:", responseTimes);
console.log("Fastest:", sorted[0]);