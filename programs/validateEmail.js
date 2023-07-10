var validEmail="azamsharp@gmail.com"
var invalidEmail="vikashchaudhary"

var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

console.log(regexEmail.test(invalidEmail));
console.log(invalidEmail.match(pattern));
// if(regexEmail.test(pattern)){
//     console.log('valid email');
// }else{
//     console.log('invalid email')
// }