class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();
d.bark();


class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    console.log("Balance:", this.#balance);
  }
}

let a = new Account();
a.deposit(500);
a.getBalance();


class MathUtil {
  static pi = 3.14;

  static square(x) {
    console.log("Square:", x * x);
  }
}

console.log("PI:", MathUtil.pi);
MathUtil.square(5);