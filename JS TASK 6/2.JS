let person = {
  name: "Jerrick",
  age: 20,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  }
};


console.log("Name:", person.name);
person.age = 19;
console.log("Updated Age:", person.age);


person.sayHello();