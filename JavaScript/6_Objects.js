let myObject = {
  name: "Rahul",
  age: 25,
  role: "developer",
  projects: ["sara", "Au"],
  skills: [
    {
      name: "python",
      rating: 3,
    },
    {
      name: "Node",
      rating: 4,
    },
  ],
  fullname: {
    fname: "rahul",
    lname: "Nayak",
  },
};

let x = myObject.projects
let y = myObject['age']
console.log(x)
console.log(y)
console.log(myObject.fullname.fname + " " + myObject.fullname.lname);
console.log(`my name is ${myObject.fullname.fname} ${myObject.fullname.lname}`);

for (let iterator of myObject.projects) {
    console.log(iterator)
}
for (let iterator of myObject.skills) {
    console.log(iterator)
    console.log(iterator.name)
}
