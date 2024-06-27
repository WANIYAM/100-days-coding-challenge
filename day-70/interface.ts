// Define an interface for a Person
interface Person {
    name: string;
    age: number;
  }
  
  // Create an object adhering to the Person interface
  const john: Person = {
    name: "John",
    age: 30,
  };
  
  // Define an interface with a method
  interface Greetable {
    greet(message: string): void;
  }
  
  // Create an object implementing the Greetable interface
  const sarah: Greetable = {
    greet(message: string) {
      console.log(`Sarah says: ${message}`);
    },
  };
  
  sarah.greet("Hello, TypeScript!"); 
  
  // Initial interface declaration
  interface Settings {
    theme: string;
  }
  
  // Reopen the interface to add more properties
  interface Settings {
    font: string;
  }
  
  // Create an object adhering to the merged Settings interface
  const userSettings: Settings = {
    theme: "dark",
    font: "Roboto",
  };
  
 
  // Interface vs. Type Aliases
  
  // Interface example
  interface Car {
    brand: string;
  }
  
  // Reopen the interface to add more properties
  interface Car {
    model: string;
  }
  
  // Type Alias example
  type Truck = {
    brand: string;
    model: string;
  };
  
  // Usage
  const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
  };
  
  const myTruck: Truck = {
    brand: "Ford",
    model: "F-150",
  };
  
  console.log(john);
  sarah.greet("Hello, TypeScript!");
  console.log(userSettings);
  console.log(myCar);
  console.log(myTruck);
  