// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing.
// Write a JavaScript program that generates test user data using a for loop.
// Each user should have a unique ID (USR-0001 format), name, email, and
// role (cycling through: admin, editor, viewer, tester, manager).
// Every 3rd user should be inactive (edge case testing).
// Demonstrate proper use of var (global counter), let (loop variables), and
// const (fixed values).

// Input:
// Generate 8 users

// Output:
// USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 |
// TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 |
// testuser3@testingacademy.com | viewer | INACTIVE

var totalGenerated = 0;

const roles = ["admin", "editor", "viewer", "tester", "manager"];
const domain = "testingacademy.com";

console.log("===== GENERATED TEST DATA =====");
console.log("");

for (let i = 1; i <= 8; i++) {
    let roleIndex = (i - 1) % roles.length;

    const userId = "USR-" + String(i).padStart(4, "0");
    const userName = "TestUser_" + i;
    const userEmail = "testuser" + i + "@" + domain;
    const userRole = roles[roleIndex];
    const isActive = i % 3 !== 0;
    const statusLabel = isActive ? "ACTIVE" : "INACTIVE";

    console.log(userId + " | " + userName + " | " + userEmail + " | " + userRole + " | " + statusLabel);
    totalGenerated++;
}

console.log("");
console.log("Total users generated (var): " + totalGenerated);

if (true) {
    var leakyVar = "I leaked out!";
    let safeVar = "I stay inside.";
}
console.log("var outside block: " + leakyVar);
