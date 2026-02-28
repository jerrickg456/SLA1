console.log("first");
let count = 0;
let intervalid = setInterval(() => {
console.log(count);
count++;
if(count > 10) {
clearInterval(intervalid);
}}, 1000);

console.log("third");
