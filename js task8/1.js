
const name = "Jerrick";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);
function greet(user = "Guest") {
  console.log(`Hello ${user}! Welcome.`);
}
greet("Alex");
greet(); 

