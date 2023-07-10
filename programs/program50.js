/*
Q5. Write a project to check if an object is an array or not?
*/

let arr=[1,2,3,4,5]
let obj={
    "firstname":"vikash",
    "lastname":"chaudhary"
}
let str="vikash"
let number1=10
let isValid=true;

if(Array.isArray(arr)){
    console.log('is an array');
}else{
    console.log('is not an array');
}

if(Array.isArray(obj)){
    console.log('is an array');
}else{
    console.log('is not an array');
}

if(typeof obj=="object"){
    console.log('is an object');
}else{
    console.log('is not an object');
}

console.log(typeof arr);
console.log(typeof obj);
console.log(typeof str);
console.log(typeof number1);
console.log(typeof isValid);