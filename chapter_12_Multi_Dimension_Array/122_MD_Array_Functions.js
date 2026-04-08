// 2D Array - common Operations

let scores = [
    [85, 90, 78], // student 0, 253
    [60, 45, 70], // student 1, 175
    [95, 88, 92]  // student 2, 275
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

let suiteResult = [
    ["login-pass", "register-pass", "logout-pass"], //Auth suite
    ["search-pass", "filter-fail", "sort-pass"], // search suite
    ["checkout-fail", "payment-fail", "confirm-pass"] // payment suite
];

for (let i = 0; i < suiteResult.length; i++) {
    for (let j = 0; j < suiteResult[i].length; j++) {
        if (suiteResult[i][j].includes("fail")) {
            //process.stdout.write(suiteResult[i][j]);
            console.log(suiteResult[i][j]);
        }
    }
}

console.log("*****************");

let execTimes = [
    [120, 340, 89, 450], // dev
    [200, 410, 100, 520], // staging
    [180, 390, 95, 490] // prod
];

// 3x4

for (let i = 0; i < execTimes.length; i++) {
    for (let j = 0; j < execTimes[i].length; j++) {
        console.log(execTimes[i][j]);
    }
    console.log();
}

console.log("*****************");