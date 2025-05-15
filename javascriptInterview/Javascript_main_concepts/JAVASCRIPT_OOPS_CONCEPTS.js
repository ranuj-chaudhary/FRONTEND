/* 
1. Objects

Core unit of OOP in JavaScript.

Created using literals, constructors, or class.
 */
js;
Copy;
Edit;
const carObj = {
  make: 'Toyota',
  drive() {
    console.log('Driving...');
  },
};
/* 🔹 2. Classes and Constructors
ES6 class syntax simplifies object creation and inheritance.

constructor is a special method for initializing new objects.
 */
class Car {
  constructor(make) {
    this.make = make;
  }

  drive() {
    console.log(`${this.make} is driving`);
  }
}

const myCar = new Car('Honda');
myCar.drive(); // Honda is driving
/* 🔹 3. Encapsulation
Hides internal details and exposes only what’s necessary.

Can be mimicked using closures or private fields (# in modern JS).
 */

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
/* 🔹 4. Inheritance
Enables one class to inherit properties/methods of another.

Use extends and super().
*/
class Vehicle {
  start() {
    console.log('Vehicle started');
  }
}

class Car extends Vehicle {
  drive() {
    console.log('Car is driving');
  }
}

const car = new Car();
car.start(); // Vehicle started
car.drive(); // Car is driving

/* 🔹 5. Polymorphism
Same method name can behave differently based on context.
 */

class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

const a = new Animal();
const d = new Dog();

a.speak(); // Animal speaks
d.speak(); // Dog barks

/* 🔹 6. Abstraction
Hide complexity and show only essential features.

Achieved using classes and methods without exposing internal logic.
 */

/* 🔹 7. this Keyword
Refers to the object the method is called on.

Behavior varies in arrow functions vs regular functions.
 */

function sayHi() {
  console.log(this.name);
}

const person = { name: 'Alice', sayHi };
person.sayHi(); // Alice

/* 🔹 8. Prototypes and Inheritance
JavaScript uses prototype-based inheritance.

Objects inherit from other objects via the prototype chain.
 */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const p = new Person('John');
p.greet(); // Hi, I'm John
