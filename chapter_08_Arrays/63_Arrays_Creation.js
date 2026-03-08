//Array

let fruits = []; //Empty Array[]

let fruits_fresh = ["Apple", "Banana", "Mango", "Orange"];
//4, index - 0,1,2,3

let arr = [10, 20, 30, 40] //0-3: 4
console.log(arr.length);
//console.log(arr.length()); length is property, () -> function
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[5]);

let testResults = ["pass", "fail", "pass", "skip"];

let mixed = [1, "hello", true, null]; //JS array can hold any type

//creating Arrays

// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array Constructor

let scores = new Array(3); // creates [empty x 3]
let scores2 = new Array(1, 2, 3); // creates [1,2,3]

let numbers = new Array(100, 200, 300, 400); //0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test);
console.log(test[0]);

//Array.from()
let chars = Array.from("hello");// ["h","e","l","l","o"]
console.log(chars);




