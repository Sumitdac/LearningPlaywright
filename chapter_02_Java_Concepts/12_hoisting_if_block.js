var x = "global"

if (true) {
    console.log(x);
    var x = "local";
    console.log(x);

}

console.log(x);