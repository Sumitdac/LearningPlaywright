// String Conversion

// toString
console.log((200).toString()); //"200"
console.log(true.toString()); //"true"

console.log(Number("42")); //42

console.log(parseInt("36px")); //36
console.log(parseFloat("3.14rem")); //3.14

let str = "hello";
str[0] = "H";
console.log(str); //"hello"

let upper = str.toUpperCase();
console.log(str);
console.log(upper);
