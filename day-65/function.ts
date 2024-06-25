// TypeScript file demonstrating various function concepts

// Function to calculate the area of a rectangle
function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }
  console.log(calculateRectangleArea(12,13));
  
  // Example of calling the calculateRectangleArea function
  const long = 5;
  const width = 3;
  const area = calculateRectangleArea(12, 13);
  console.log(`The area of the rectangle is: ${area}`);
  
  // Optional and Default Parameters
  
  // Optional Parameters
  function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
      console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  console.log(greetOptional("waniya",23));
  
  
  // Calling greetOptional with different arguments
  greetOptional("Alice"); // Output: "Hello, Alice!"
  greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
  
  // Default Parameters
  function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  // Calling greetDefault with different arguments
  greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
  greetDefault("waniya", 23); // Output: "Hello, waniya! You are 30 years old."
  
  // Rest Parameter
  
  // Function with a rest parameter and type annotations
  function addAll(...nums: number[]): number {
    let result = 0;
    for (let num of nums) {
      result += num;
    }
    return result;
  }
    
  // Calling the addAll function with various numeric arguments
  console.log(addAll(10, 20, 30, 100, 10.5)); // Output: 170.5
  
  // Arrow Function
  
  // Arrow function to add two numbers
  const addWithArrow = (num1: number, num2: number): number => num1 + num2;
  
  // Calling the addWithArrow function
  console.log(addWithArrow(10, 20)); // Output: 30
  
  // Anonymous Function
  
  // Anonymous function to add two numbers
  const add = function(num1: number, num2: number): number {
    return num1 + num2;
  };
  
  // Calling the add function
  console.log(add(10, 20)); // Output: 30
  
  // void & never Types
  
  // void function example
  function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  