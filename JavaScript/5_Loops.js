const myArray = [1, 2, "Rahul", true, 1.6];
const myString = "asdhcausjhcxiasjco";

for (let i = 0; i < myArray.length; i++) {
  console.log("index = ", i, "value = ", myArray[i]);
}
for (let i of myArray) {
  if (i === 1) {
    i = 5;
  }
  console.log(i, "ok");
}
for (const i of myString) {
  // console.log(i);
}
for (var key in myArray) {
  console.log(myArray[key]);
}
myArray.forEach((i) => {
  console.log(i);
});
console.log("seperator");
myArray.map((key, i) => console.log(key));
