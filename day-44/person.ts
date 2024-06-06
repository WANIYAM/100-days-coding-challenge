// Define the Person class
export class Person {
    constructor(public name: string, public age: number) {}

    // Define a method
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
