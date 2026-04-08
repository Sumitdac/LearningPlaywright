// Objects
// Key and Value

let student1 = { name: "Amit", age: 65 };
console.log(student1); //{ name: 'Amit', age: 65 }
let student2 = { name: "sumit" };
console.log(student2); //{ name: 'sumit' }
let student3 = { name: "Sumit", age: 35, phone: 8208008857 };
console.log(student3); //{ name: 'Sumit', age: 35, phone: 8208008857 }

// Key will not be in the double quotes
// below key in double quotes is actually JSON
let JSON_student4 = { "name": "Sumit", "age": 35, "phone": 8208008857 };
console.log(JSON_student4); //{ name: 'Sumit', age: 35, phone: 8208008857 }

console.log("************")

let a = { status: "pass" }
console.log(a.status); //pass
console.log(a["status"]); //pass

let a1 = { status: 'pass' }
console.log(a1.status); // pass

console.log("************")

let b = a; // b copies the Reference, not the object
b.status = "fail";
console.log(a.status); // fail

console.log("************")

// Two separate objects - different memory
let c = { status: "pass" };
let d = { status: "fail" };
console.log(c === d); // false

// keys don't have spaces in between
// let e = {status id: "pass"}; invalid

console.log("************")

//keys are case sensitive
let f = { status: "pass", Status: "fail" };
console.log(f["status"]); // pass
console.log(f["Status"]); // fail

console.log("************")

const t_js = {
    name: "Sumit",
    age: 10
};
console.log(t_js);

const t_json = {
    "name": "sumit",
    "age": 10
};
console.log(t_json);
