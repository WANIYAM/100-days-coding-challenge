"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Define the Person class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Define a method
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.Person = Person;
