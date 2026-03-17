const { constants } = require("node:buffer");

let arr = [1, 2, 3];
console.log(arr);

//Add to End
arr.push(4);
console.log(arr);

//Remove from End
arr.pop();
console.log(arr);

//Add multiple element in the end
arr.push(5, 6);
console.log(arr);

//Add to Beginning
arr.unshift(0);
console.log(arr);

//Remove from Begining
arr.shift();
console.log(arr);

// splice(start,deletecount, ...itemsToAdd)
arr.splice(2, 1) //remove 1 item at index 2
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr); //1,2,99,5,6

arr.splice(1, 2, 10, 20);
console.log(arr); // 1,10,20,5,6

