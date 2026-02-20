let a = "Sumit";
if (true) {
    // console.log(a); // local variable, TDZ
    let a = "Temp";
    console.log(a);
}