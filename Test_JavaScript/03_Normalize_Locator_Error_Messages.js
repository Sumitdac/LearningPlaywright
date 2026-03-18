// Normalize Locator Error Messages
// Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

// Examples:
// Input:
// rawMessage = " Locator not found after TIMEOUT "
// Output:
// Normalized: locator not found after timeout Category: TIMEOUT
// 💡 Explanation:After normalization, the message contains both "locator" and "timeout", but TIMEOUT takes priority.


function normalizeError(rawMessage) {
    // Step 1: Normalize the message
    const normalized = rawMessage
        .trim()                  // remove leading/trailing spaces
        .toLowerCase()           // convert to lowercase
        .replace(/\s+/g, " ");   // collapse multiple spaces

    // Step 2: Determine category (priority: TIMEOUT > LOCATOR > GENERAL)
    let category = "GENERAL";

    if (normalized.includes("timeout")) {
        category = "TIMEOUT";
    } else if (normalized.includes("locator")) {
        category = "LOCATOR";
    }

    // Step 3: Print result
    console.log(`Normalized: ${normalized} Category: ${category}`);
}


const rawMessage = " Locator not found after TIMEOUT ";
normalizeError(rawMessage);