// Exercise 3 — Deep vs Shallow Copy (Tricky)

// What is the output and why? How would you fix it?

//javascript

let suite1 = [{ name: "login", status: "pass" }];
//let suite2 = [...suite1];
let suite2 = structuredClone(suite1); // creates a deep copy of an object or array.
//structuredClone() duplicates the entire data structure, including all nested objects.
//So instead of copying only references (like spread ... does), 
// it creates completely new objects in memory.
suite2[0].status = "fail";
console.log(suite1[0].status);