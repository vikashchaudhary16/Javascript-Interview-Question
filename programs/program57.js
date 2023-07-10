/*
Q12. How to convert an array to object in javascript?
*/

let arr=[1,2,3,3,4]

console.log(Object.assign({}, arr));

console.log( { ...['a', 'b', 'c'] });