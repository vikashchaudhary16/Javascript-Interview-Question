/*
Q11. How to convert an object into array in javascript?
*/

//let obj= {'0': 1, '1': 2, '2': 3, '3': 3, '4': 4 };
let obj={ '0': 'a', '1': 'b', '2': 'c' };

// var result = obj.map((key) => [Number(key), obj[key]]);
// console.log(result);

var result = Object.keys(obj);
console.log(result);
result=result.map((key) => [Number(key), obj[key]]);

console.log(result);
console.log(Object.values(obj));