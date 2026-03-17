// Without functions - repeated logic

// let score1 = 85;
// let result1 = score1 >= 70 ? "pass" : "fail";
// console.log(result1);

// let score2 = 45;
// let result2 = score2 >= 70 ? "pass" : "fail";
// console.log(result2);

function getResult(score) {
    return score >= 70 ? "pass" : "fail";
}

let result3 = getResult(75);
let result4 = getResult(55);

console.log(result3);
console.log(result4);
