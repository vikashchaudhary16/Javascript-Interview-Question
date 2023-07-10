/*
toString()
join()
pop()
push()
shift()
unshift()
length 
delete()
concat()
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
*/

//splice

/* 
Definition and Usage
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.
*/
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice

/*
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("----after-----");
console.log(array);
console.log(array2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (let x of keys) {
    console.log(x);
  }

  
const citrus = fruits.slice(1, 3);
console.log(citrus);
console.log('splice',fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits);
console.log('splice',fruits.splice(2, 1, "Pineapple"));
console.log(fruits);

let text = fruits.toString();
console.log(text);

let text1 = fruits.join();
let text2 = fruits.join(" and ");

console.log(text1);
console.log(text2);

console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

fruits.unshift("Lemon","Pineapple");
console.log(fruits);
fruits.push("Lemon1","Pineapple1");
console.log(fruits);

delete fruits[0];
console.log(fruits);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2);
console.log(children);
const children1 = arr1.concat(arr2, arr3);
console.log(children1);

