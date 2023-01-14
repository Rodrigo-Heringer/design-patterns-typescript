function Person(firstName, LastName, age) {
  this.firstName = firstName;
  this.lastName = LastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Rodrigo',
  lastName: 'Heringer',
  age: 42,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Helena', 'Vieira', 20);
console.log(person2);
console.log(person2.fullName());
