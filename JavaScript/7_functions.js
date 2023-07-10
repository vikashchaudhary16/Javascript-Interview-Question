let no1 = 22;
let no2 = 223;
let no3 = 242;

// console.log(no1 ** 2 + no1 - no1 * 3);
// console.log(no2 ** 2 + no2 - no2 * 3);
// console.log(no3 ** 2 + no3 - no3 * 3);

// Traditional Function
function myCalculator(anyNo) {
  return anyNo ** 2 + anyNo - anyNo * 3;
}

// Anonymous Function
let i ;
(function (anyNo = 222) {
  i = (anyNo ** 2 + anyNo - anyNo * 3);
})();


console.log(i,"i")
console.log(myCalculator(22));
console.log(myCalculator(223));
console.log(myCalculator(242));

// Lambda Functions or Arrow Functions

const myCalculatorArrow = (anyNo) => {
  return anyNo ** 2 + anyNo - anyNo * 3;
};
console.log(myCalculatorArrow(22));
console.log(myCalculatorArrow(223));
console.log(myCalculatorArrow(242));
