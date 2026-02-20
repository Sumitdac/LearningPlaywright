0 == ""; //true
0 == "0"; //true
0 == false; //true
null == undefined; //true
"\t\n" == 0; //true

//Rule Breaker (all below are false)

null == 0; //false
null == ""; //false
null == false; //false
undefined == 0; //false
undefined == ""; //false
undefined == false; //false
NaN == NaN; //false

console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined);//true
console.log(null === undefined);//false
console.log(0 === false);//false

console.log("0" == false);//true
console.log("" == "0");//false
console.log("" == 0);//true


var a = 0 / 0;
console.log(a); //NaN

var a1 = 0.0 / 0.0;
console.log(a1); //NaN

console.log(a == a1);//false