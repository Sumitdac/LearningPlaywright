//var, let, const

//var - function scoped
console.log("Var Example")
var a = 10;
console.log(a);

function printHello() {
    console.log("Hello World");
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);

    }
    console.log("F->", a);
}

printHello();

//let - Block Scoped
console.log("Let Example")

let b = 10;
console.log(b);

function printHello1() {
    console.log("Hello World");
    let b = 20;
    console.log(b);
    if (true) {
        let b = 30;
        console.log(b);

    }
    console.log("let->", b);
}

printHello1();