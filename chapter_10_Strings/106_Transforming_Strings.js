// Transforming Strings

let str = "   Hello, World!   ";
console.log(str.toUpperCase()); //  HELLO, WORLD!  
console.log(str.toLowerCase()); //  hello, world!   

// Trim Whitespace
console.log(str.trim()); //Hello, World!

console.log("****************")
console.log(str.trim().toLowerCase());
console.log("****************")

console.log(str.trimStart()); //Hello, World!   
console.log(str.trimEnd()); //    Hello, World!

//Replace
let msg = "Test: FAIL. Retry: FAIL";
console.log(msg.replace("FAIL", "PASS")); //Test: PASS. Retry: FAIL (first only)
console.log(msg.replaceAll("FAIL", "PASS")); //Test: PASS. Retry: PASS
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regx

// concatenation

console.log("Hello" + "" + "world"); //Helloworld
console.log("Hello".concat("", "world")); //Helloworld

console.log(`${"Hello"}${"world"}`); //Helloworld

let url = "https://app.vwo.com?q=search=sumit";
console.log(url.replace(/app/g, "qa")); //https://qa.vwo.com?q=search=sumit

// Splitting & Joining
console.log("pass,fail,skip".split(",")); //[ 'pass', 'fail', 'skip' ]
console.log("hello".split("")); //[ 'h', 'e', 'l', 'l', 'o' ]

console.log("test_login_pass".split("_").join(" ")); //test login pass

console.log("****************")
console.log(url.slice(8, 11));
console.log(url.split("://")[1].split(".")[0]);
console.log("****************")


// Template literals (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date); //2024-03-07



