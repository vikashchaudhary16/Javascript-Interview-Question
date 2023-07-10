var text="this is goa"

function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }

console.log(firstNonRepeatedCharacter(text));

function findUnique(str){
    // The variable that contains the unique values
    let uniq = "";
     
    for(let i = 0; i < str.length; i++){
      // Checking if the uniq contains the character
      if(uniq.includes(str[i]) === false){
        // If the character not present in uniq
        // Concatenate the character with uniq
        uniq += str[i]
      }
    }
    return uniq;
  }
   
  console.log(findUnique("Geeksforgeeks"))
  console.log(findUnique("Geeksforgeeks Is a great site for computer science"))

// Take empty array revArray
const revArray = [];
const length = text.length - 1;
  
// Looping from the end
for(let i = length; i >= 0; i--) {
    revArray.push(text[i]);
}
  
// Joining the array elements
console.log( revArray.join(''));

if(text.startsWith("this")){
    console.log('text found')
}else{
    console.log('text not found')
}

//trim a string in JavaScript
console.log(text.replace('this',''));

// program to add a key/value pair to an object

const person = {
    name: 'Monica',
    age: 22,
    gender: 'female'
}

// add a key/value pair
person.height = 5.4;
person['height1'] = 5.4;

console.log(person);