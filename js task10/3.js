function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  console.log("Sum:", total);
}

sum(10, 20, 30);
sum(5, 5, 5, 5);
