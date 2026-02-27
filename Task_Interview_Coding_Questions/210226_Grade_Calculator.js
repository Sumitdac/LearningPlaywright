//✅ Grade Calculator:
// Write a program that calculates and displays the letter grade for a given 
// numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

let grade;
let marks = 97;



if (typeof marks != "number") {
    console.log("Are you fool, why you are giving marks as not a number")
    return;
}

if (marks < 0 || marks > 100) {
    console.log("Are you fool, why you are giving score <0 or >100")
    return;
}

if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 80 && marks <= 89) {
    cgrade = "B";
} else if (marks >= 70 && marks <= 79) {
    grade = "c";
} else if (marks >= 60 && marks <= 69) {
    grade = "D";
} else {
    grade = "F";
}

//console.log("For the marks", marks, "Grade is ->", grade);
console.log(`For the marks ${marks} Grade is -> ${grade}`);