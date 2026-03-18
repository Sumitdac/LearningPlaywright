// Browser Execution Planner
// You have an array of all supported browsers and another array of temporarily blocked browsers. Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

// Examples:
// Input:
// allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]
// Output:
// { runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }
// 💡 Explanation:The function filters out blocked browsers and formats both lists into a readable plan.

function buildExecutionPlan(allBrowsers, blockedBrowsers) {
    // Step 1: Find runnable browsers (not blocked)
    const runnable = allBrowsers.filter(
        browser => !blockedBrowsers.includes(browser)
    );

    // Step 2: Blocked browsers (only those present in allBrowsers)
    const blocked = allBrowsers.filter(
        browser => blockedBrowsers.includes(browser)
    );

    // Step 3: Build plan string
    const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

    return { runnable, blocked, plan };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

console.log(buildExecutionPlan(allBrowsers, blockedBrowsers));