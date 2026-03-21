// Pure Functions
// A Pure function always returns the same output for the same input and has no side effects.

// Pure - no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7)); // 70.00

// Impure - depends on external state


function isPasing(score) {
    return score >= threshold; // depends on external variable
}

let threshold = 70;
console.log(isPasing(threshold));

threshold = 50;
console.log(isPasing(threshold));