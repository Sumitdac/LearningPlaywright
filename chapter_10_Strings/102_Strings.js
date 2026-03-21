// Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test Completed in ${320}ms`; //template literal

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) - allows expression & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2+2 = ${2 + 2}`;
console.log(msg);

// Multiline
let report = `
Test: Login
Stats: Pass
Duration: 320ms
`;

// String constructor (convert other types)
console.log(String(200));
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // 1,2