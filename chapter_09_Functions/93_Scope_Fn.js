// Scope in Functions

let env = "Staging"; // global scope

function setupConfig() {
    let timeout = 3000; // local scope
    console.log(env); // can access global
    console.log(timeout); // can access local
}

setupConfig();
console.log(env);
// console.log(timeout); //ReferenceError - not accessibile outside

// --------------

// Nested scope
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x); // inner can access outer's variables

    }
    inner();
    //console.log(y); // outer cannot access inner's variables
}

outer();