// Primitive data types - Call by Value
let a = 10;
let b = a;
b = 99;
console.log(a);

//objects - copied by Reference, call by ref.
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);

