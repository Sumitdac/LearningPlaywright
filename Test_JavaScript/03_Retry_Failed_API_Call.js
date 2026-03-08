// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call 
// using a do...while loop. The program should retry a maximum of 5 times. 
// Simulate random success/failure using Math.random() 
// (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

// Input:
// MAX_ATTEMPTS = 5
// Output:
// Attempt 1: ❌ FAILED (Timeout/Error) Attempt 2: ✅ SUCCESS (Response 200 OK) API 
// call PASSED after 2 attempt(s).

// Configuration
let MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
    attempt++;

    // Generate random number between 0 and 1
    let randomValue = Math.random();

    if (randomValue > 0.6) {   // 40% success condition
        console.log("Attempt " + attempt + ": ✅ SUCCESS (Response 200 OK)");
        success = true;
    } else {
        console.log("Attempt " + attempt + ": ❌ FAILED (Timeout/Error)");
    }

} while (!success && attempt < MAX_ATTEMPTS);


// Final Result
if (success) {
    console.log("API call PASSED after " + attempt + " attempt(s).");
} else {
    console.log("API call FAILED after " + MAX_ATTEMPTS + " attempts. Escalate issue.");
}