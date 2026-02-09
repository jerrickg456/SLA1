
let numbers = [5, 10, 15, 20, 25];

let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);


let firstGreater = numbers.find(num => num > 10);
console.log("First number > 10:", firstGreater);

console.log("Includes 20:", numbers.includes(20));
console.log("Includes 100:", numbers.includes(100));

