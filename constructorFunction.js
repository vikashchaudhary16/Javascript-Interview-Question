/*
A constructor is a special function that creates and initializes an object instance of a class.

The Function() constructor creates a new Function object. 
Calling the constructor directly can create functions dynamically
*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }