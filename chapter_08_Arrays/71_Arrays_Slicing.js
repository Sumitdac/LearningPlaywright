// Slicing & Combing

let arr = [1, 2, 3, 4, 5];

// slice(start, end) - returns new array, does not mutate actual -> (start, end-1), index = 0

// console.log(arr.slice(1, 3)); //[2,3]
// console.log(arr.slice(2, 4)); //[3,4]
// console.log(arr.slice(2, 6)); //[3,4,5]
// console.log(arr.slice(-2)); // [4,5] 
// console.log(arr.slice(-3)); // [3,4,5]
// console.log(arr.slice(-5)); // [1,2,3,4,5]
// console.log(arr.slice(-6)); // [1,2,3,4,5]

// console.log(arr.slice(2));

// console.log(arr.slice(0));
// console.log(arr.slice(-5));

//let arr1 = [1, 2, 3, 4, 5];
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);
let d = a.concat(b, [5, 6]);
console.log(d);

// spread (modern way) - concatenation (...)
let e = [...a, ...b];
console.log(e)

// Join
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);