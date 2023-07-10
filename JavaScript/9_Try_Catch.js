const x = "anything";

try {
  x = "ttt";
  console.log(x);
} catch(err) {
  console.log("error - ", err.message);
}

