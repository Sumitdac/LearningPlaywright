// Reusable Step Runner with Callback
// Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. If the callback throws an error, catch it and return `passed: false` with the error message.

// Examples:
// Input:
// runStep("open dashboard", () => "Page loaded")
// Output:
// { stepName: "open dashboard", passed: true, message: "Page loaded" }
// 💡 Explanation:The callback succeeds, so the wrapper marks the step as passed.

function runStep(stepName, actionFn) {
    console.log(`Starting step: ${stepName}`);

    try {
        const result = actionFn(); // execute callback

        return {
            stepName,
            passed: true,
            message: result
        };
    } catch (error) {
        return {
            stepName,
            passed: false,
            message: error.message
        };
    }
}

const result = runStep("open dashboard", () => "Page loaded");
console.log(result);