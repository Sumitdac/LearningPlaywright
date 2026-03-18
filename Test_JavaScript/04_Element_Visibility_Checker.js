// Element Visibility Checker
// In UI automation (Cypress/Playwright), you often need to validate element
// states before interacting with them. Write a JavaScript program that checks an
// element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate
// action a QA engineer should take. Use strict equality (===),
// logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled),
// HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled),
// OK (all good).

// Input:
// isPresent = true, isDisplayed = true, isEnabled = false

// Output:
// Status: DISABLED Severity: WARNING Action: Element is visible but disabled.
// Wait for enable state or check preconditions.

const isPresent = true;
const isDisplayed = true;
const isEnabled = false;

let status;
let action;

if (isPresent && isDisplayed && isEnabled) {
    status = "READY";
    action = "Element is interactable. Proceed with click/type action.";
} else if (isPresent && isDisplayed && !isEnabled) {
    status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else if (isPresent && !isDisplayed) {
    status = "HIDDEN";
    action = "Element exists in DOM but not visible. Scroll into view or check CSS.";
} else if (!isPresent) {
    status = "NOT FOUND";
    action = "Element not in DOM. Check locator strategy or wait for dynamic load.";
}

const severity = !isPresent ? "CRITICAL" : (!isDisplayed || !isEnabled) ? "WARNING" : "OK";

console.log("===== ELEMENT CHECK =====");
console.log("isPresent   : " + isPresent);
console.log("isDisplayed : " + isDisplayed);
console.log("isEnabled   : " + isEnabled);
console.log("Status      : " + status);
console.log("Severity    : " + severity);
console.log("Action      : " + action);
console.log("=========================");
