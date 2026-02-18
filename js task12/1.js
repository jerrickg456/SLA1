console.log("Start");

setTimeout(() => {
  console.log("Async Message");
}, 0);

console.log("End");

setTimeout(() => {
  console.log("Printed after 2 seconds");
}, 2000);

let count = 1;
let timer = setInterval(() => {
  console.log("Counter:", count);
  count++;
  if (count > 5) clearInterval(timer);
}, 1000);
