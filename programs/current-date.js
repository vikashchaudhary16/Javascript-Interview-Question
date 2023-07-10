var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today);


const person1 = {
    name: 'Dhoni',
    age: 41,
    role: 'Batsmen',
    runs: 104549,
 };
 
 //Creating person2 object
 const person2 = {
    name: 'Kohli',
    age: 34,
    role: 'Batsmen',
    runs: 12178,
 };

 if(JSON.stringify(person1) === JSON.stringify(person2)){
    console.log('object is same')
 }else{
    console.log('object is not same')
 }