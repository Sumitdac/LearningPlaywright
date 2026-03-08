let scores = [45, 82, 91, 60, 73];

// map - transforms every element, return new array
// in case of map you will get same number of items but the value can change

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

console.log("*************")
// filter - keeps elements that pass a test

let passing = scores.filter(s => s > 70);
console.log(passing);
console.log("*************")

//reduce - accumulates to a single value
let total = scores.reduce((sum, s) => sum + s, 0) //351
console.log(total);

console.log("*************")

//flat - flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());