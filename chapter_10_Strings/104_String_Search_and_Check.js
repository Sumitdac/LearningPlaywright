// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() // return boolean values
console.log(url.includes("staging")); //true
console.log(url.includes("production")); //false

// startswith / endswith

console.log(url.startsWith("https")); // true
console.log(url.startsWith("http://")); //false
console.log(url.endsWith("true")); //true

//Indexof / lastIndexof
console.log(url.indexOf("a")); //10
console.log(url.lastIndexOf("a")); //24

console.log(url.indexOf("nothere")); //-1

// search() - accepts regex, return index
// search bascially works in a way that it searches with regex.
console.log(url.search(/login/)); //28

let name1 = "Dhanish2"
console.log(name1.search(/\d+/)); //7

let name2 = "Ghosh24"
console.log(name2.search(/\d/g)); //5

console.log("Error: 404 Not Found".match(/\d+/g)); //[ '404' ]





