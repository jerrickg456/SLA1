
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);
let found = numbers.find(num => num === 30);
console.log("Found value:", found);
console.log("Includes 40:", numbers.includes(40));
console.log("Includes 100:", numbers.includes(100));

