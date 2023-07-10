const myArray = [1, 2, "Rahul", true, 1.6];

let x = myArray[2]
console.log(x)

myArray[2] = "rrr"
console.log(myArray)

console.log(myArray.toString())
console.log(myArray.join("_"))

// it appends the element in the last index
myArray.push(45)
console.log(myArray)
// it removes the element in the last index
myArray.pop()
console.log(myArray)

console.log(myArray.slice(1,3))

console.log(myArray.sort())
console.log(myArray.reverse())