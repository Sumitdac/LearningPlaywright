//sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// alphabetical by default

let nums = [10, 1, 2, 21];
nums.sort(); // [1, 10, 2, 21] - WRONG (compares as string)
console.log(nums);
nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a); // Dscending
console.log(nums);