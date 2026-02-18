class Person {
  constructor() {
    this._name = "";
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

let p = new Person();
p.name = "Jerrick";
console.log(p.name);
