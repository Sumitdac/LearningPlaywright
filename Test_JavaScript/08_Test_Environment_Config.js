// Test Environment Config
// In CI/CD pipelines, tests run against different environments.
// Write a JavaScript program using a switch statement that takes an environment name
// stored in a variable and prints the base URL, API key pattern, and timeout.
// Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different base URL,
// API key prefix, timeout, and description.

// Input:
// envName = "staging"

// Output:
// Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror


const envName = "staging";
const env = envName.toLowerCase();

let baseUrl;
let apiKeyPrefix;
let timeoutMs;
let description;

switch (env) {
    case "dev":
        baseUrl = "https://dev-api.testingacademy.com";
        apiKeyPrefix = "dev_key_";
        timeoutMs = 10000;
        description = "Development - Unstable, latest code";
        break;
    case "staging":
        baseUrl = "https://staging-api.testingacademy.com";
        apiKeyPrefix = "stg_key_";
        timeoutMs = 8000;
        description = "Staging - Pre-production mirror";
        break;
    case "qa":
        baseUrl = "https://qa-api.testingacademy.com";
        apiKeyPrefix = "qa_key_";
        timeoutMs = 8000;
        description = "QA - Dedicated test environment";
        break;
    case "production":
    case "prod":
        baseUrl = "https://api.testingacademy.com";
        apiKeyPrefix = "prod_key_";
        timeoutMs = 5000;
        description = "Production - Live (read-only tests only!)";
        break;
    default:
        baseUrl = "UNKNOWN";
        apiKeyPrefix = "UNKNOWN";
        timeoutMs = 0;
        description = "Unknown environment: " + envName;
        console.log("❌ ERROR: Invalid environment '" + envName + "'. Use: dev, staging, qa, prod");
}

if (baseUrl !== "UNKNOWN") {
    console.log("🔧 Environment Config");
    console.log("---------------------");
    console.log("Environment : " + env.toUpperCase());
    console.log("Base URL    : " + baseUrl);
    console.log("API Key     : " + apiKeyPrefix + "xxxx-xxxx");
    console.log("Timeout     : " + timeoutMs + "ms");
    console.log("Description : " + description);
}
