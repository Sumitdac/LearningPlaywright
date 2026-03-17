// Rest Parameters
function logResult(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(",")}`);
}

logResult("Auth Suite", "pass", "fail", "pass", "skip");
// Suite: Auth Suite
// Results: pass,fail,pass,skip