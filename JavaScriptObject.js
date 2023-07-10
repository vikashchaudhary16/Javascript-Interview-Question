/*
Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

1. Create a single object, using an object literal.
2. Create a single object, with the keyword new.
3. Define an object constructor, and then create objects of the constructed type.
4. Create an object using Object.create().
*/

//1. Using an Object Literal
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//2. Using the JavaScript Keyword new
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//3. Define an object constructor, and then create objects of the constructed type.
function Emp(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

/*
4. JavaScript object.create() method is used to create a new object with the specified 
prototype object and properties
*/
var object = Object.create(null);
object.firstName = "John";

console.log(object);
console.log(object.firstName);
console.log(person);
console.log(person1);

//Object.create() vs Object.assign()
/*
The Object.assign() static method copies all enumerable own properties from one or more 
source objects to a target object. It returns the modified target object.

The Object.create() static method creates a new object, using an existing object 
as the prototype of the newly created object.
*/
