// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency
// ("always", "often", "rarely") and impact ("blocker", "major", "minor").
// Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

// Input:
// frequency = "always", impact = "blocker"

// Output:
// Bug Title: Checkout page crashes on applying coupon Frequency: always
// Impact: blocker Severity: P0 - Critical: Stop release immediately

const bugTitle = "Checkout page crashes on applying coupon";
const frequency = "always";
const impact = "blocker";

let severity;

if (frequency === "always") {
    if (impact === "blocker") {
        severity = "P0 - Critical: Stop release immediately";
    } else if (impact === "major") {
        severity = "P1 - High: Must fix before release";
    } else {
        severity = "P2 - Medium: Fix in next sprint";
    }
} else if (frequency === "often") {
    if (impact === "blocker") {
        severity = "P1 - High: Must fix before release";
    } else if (impact === "major") {
        severity = "P2 - Medium: Fix in next sprint";
    } else {
        severity = "P3 - Low: Add to backlog";
    }
} else if (frequency === "rarely") {
    if (impact === "blocker") {
        severity = "P2 - Medium: Fix in next sprint";
    } else if (impact === "major") {
        severity = "P3 - Low: Add to backlog";
    } else {
        severity = "P4 - Trivial: Nice to fix";
    }
} else {
    severity = "INVALID: Unknown frequency value";
}

console.log("===== BUG SEVERITY REPORT =====");
console.log("Bug Title  : " + bugTitle);
console.log("Frequency  : " + frequency);
console.log("Impact     : " + impact);
console.log("Severity   : " + severity);
console.log("===============================");
