// ✅ Leap Year Checker:

// Create a program that determines whether a given year is a leap year. 
// A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
// Use an if-else statement to make this determination.

let year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year!");
}
else {
    console.log(year + " is not a leap year!");
}

// let a = 10;
// console.log(a++ + ++a);

let a = 5;
let b = a++ + ++a;
//let c = a++ + ++a + ++a + ++a + a++;
console.log(b);
console.log(a);
//console.log(c);

// for (let i = 0; i < 10;) {
//     console.log("Hello"); //runs infinite times
// }



