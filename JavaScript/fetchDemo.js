async function logJSONData() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = await response.json();
    console.log(jsonData);
  }catch(err){
    console.log(err.message);
  } 
}

logJSONData();

function getData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err=>console.log(err.message));
}

getData();