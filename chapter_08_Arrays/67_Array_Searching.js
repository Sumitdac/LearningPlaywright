//searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexof - returns first index, or -1 if not found
console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip")); //-1

console.log(results.lastIndexOf("fail")); //4

//includes - returns boolean
console.log(results.includes("error")); //true
console.log(results.includes("skip")); //false

// find -  returns first matching element

let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 20)); //25,30,45 -> A-25

//findIndex
console.log(nums.findIndex(n => n > 20)); //1

console.log(nums.findLast(n => n > 20)); //45
console.log(nums.findLastIndex(n => n > 20)); //3