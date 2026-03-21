function outer() {
    let message = "Hello";
    console.log("Outer Called!");

    function inner() {
        console.log(message);
    }

    return inner;
}

//outer();
let fn_inner = outer();
fn_inner();
inner();