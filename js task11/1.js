class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(this.name + " " + this.age);
  }
}

let s1 = new Student("Jerrick", 19);
s1.show();
