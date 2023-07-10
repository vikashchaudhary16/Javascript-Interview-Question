//To create a generator, you need to first define a generator function with function* symbol. 
//The objects of generator functions are called generators.

//use of generator function:- Generator functions provide a powerful alternative: they allow you 
//                            to define an iterative algorithm by writing a single function whose 
//                            execution is not continuous. Generator functions are written using 
//                            the function* syntax. When called, generator functions do not initially 
///                           execute their code.

// The yield expression returns a value. However, unlike the return statement, it doesn't terminate 
//the program. That's why you can continue executing code from the last yielded position. 
//For example:-
function* generatorFunc() {
  console.log("1. code before first yield");
  yield 100;

  console.log("2. code before the second yield");
  yield 200;

  console.log("3. code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
