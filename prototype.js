/*
Every object in JavaScript has a built-in property, which is called its prototype. 
The prototype is itself an object, so the prototype will have its own prototype, 
making what's called a prototype chain. The chain ends when we reach a prototype 
that has null for its own prototype.

JavaScript is a dynamic language.
You can attach new properties to an object at any time as shown below.

Prototype chaining is used to build new types of objects based on existing ones. 
It is similar to inheritance in a class based language.

The prototype on object instance is available through Object.getPrototypeOf(object) 
or __proto__ property whereas prototype on constructors function is available through Object.prototype.
*/

// function constructor
function Person(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}

Person.prototype.calculateAge= function(){
    console.log('The current age is: '+(2019- this.yearOfBirth));
}
console.log(Person.prototype);