// Exercise 1 : API Response Validation

// You receive an array of API response codes. Write code to:

// Check if ALL responses are successful (200–299)

// Find the FIRST non-success code

// Return all unique error codes


let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. Check if all successful
let allSuccessful = responses.every(s => s >= 200 && s <= 299);

// 2. First non-success code
let firstError = responses.find(a => a < 200 || a > 299);

// 3. Unique error codes
let uniqueErrors = [...new Set(responses.filter(b => b < 200 || b > 299))];

console.log("All Successful:", allSuccessful);
console.log("First Error:", firstError);
console.log("Unique Errors:", uniqueErrors);