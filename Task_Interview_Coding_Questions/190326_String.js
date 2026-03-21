// ✅ Validate URL contains expected environment

let url = "https://staging.myapp.com/dashboard";

console.log(url.includes("staging")); // true

console.log(url.startsWith("https")); // true

console.log(url.endsWith("/dashboard")); // true

console.log("*******************************")
// ✅ Extracting status code from log

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status1 = log.match(/Status: (\d+)/)[1];

console.log(status1); // 500

console.log("*******************************")
// ✅ Masking sensitive information

let env = "staging"; let module = "auth"; let count = 7;
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId); //staging_auth_007

console.log("*******************************")
// ✅ Normalizing test results

let actual = " PASS "; let expected = "pass";
console.log(actual.trim().toLowerCase() === expected); // true

console.log("*******************************")
// ✅ Parsing query parameters from URL

let testUrl = "https://app.com/search?query=login&page=2&sort=asc";
let params = Object.fromEntries(testUrl.split("?")[1].split("&").map(p => p.split("=")));
console.log(params); // { query: 'login', page: '2', sort: 'asc' }

console.log("*******************************")
// ✅ Masking sensitive information in logs

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret";
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");

console.log(masked); // Bearer ***REDACTED***