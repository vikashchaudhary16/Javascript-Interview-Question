//JavaScript For Loop
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//JavaScript For In
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}


//JavaScript For Of
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x;
}

//JavaScript While Loop
while (i < 10) {
  text += "The number is " + i;
  i++;
}

//The Break Statement
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

//The Continue Statement
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
