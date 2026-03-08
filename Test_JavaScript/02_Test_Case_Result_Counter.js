// Test Case Result Counter
// After a test suite runs, you receive an array of test results
// (strings: "pass", "fail", "skip"). Write a JavaScript program
// using a for loop that counts how many tests passed, failed, and were skipped.
// Print a test report with total tests, counts, pass rate percentage,
// and a verdict (all passed → ready for release, ≤2 failures → review,
// >2 failures → block release).

// Input:
// testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
// Output:
// Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT:
// Minor failures. Review before release.

testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passResult = 0;
let failResult = 0;
let skipResult = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passResult++
    }
    else if (testResults[i] === 'fail') {
        failResult++;
    }
    else if (testResults[i] === "skip") {
        skipResult++
    }
}
// Total Tests
let totalTests = testResults.length;

// Pass Rate Calculation
let passRate = (passResult / totalTests) * 100;

// Verdict Logic
let verdict = "";

if (failResult === 0) {
    verdict = "All tests passed. Ready for release.";
}
else if (failResult <= 2) {
    verdict = "Minor failures. Review before release.";
}
else {
    verdict = "Multiple failures. Block release.";
}

// Final Report
console.log("Total Tests :", totalTests);
console.log("Passed:", passResult);
console.log("Failed:", failResult);
console.log("Skipped:", skipResult);
console.log("Pass Rate:", passRate.toFixed(2) + "%");
console.log("VERDICT:", verdict);
