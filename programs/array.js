var data=[1,2,3,4,5]

var sum=data.reduce((prev,item)=>prev+item);

var rsult = data.filter((item)=>item%2==0);

console.log(sum);
console.log(rsult);


var amount=76.9099
console.log(Math.round(amount*100)/100);
console.log(data.reverse());

let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}