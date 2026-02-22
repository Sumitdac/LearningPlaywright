if ("Hello World") console.log("String is truthy!");
if (1) console.log("Number is truthy!");
if ({}) console.log("Empty object is trythy!");
if ([]) console.log("Empty array is trythy!");


if ("") console.log("Won't print!"); //"" falsy result
if (null) console.log("won't print!"); //null falsy result
if (undefined) console.log("won't print!");
if (NaN) console.log("won't print!");
