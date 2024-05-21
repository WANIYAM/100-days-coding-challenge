/*                                   QUESTION 79
Creating and Accessing Object Properties: 
Construct an object representing a car with properties for make, 
model, and year. Then, show how you can access the model property of the car.
*/ 

// Define an interface for the Car object
interface Car {
    make: string;
    model: string;
    year: number;
  }
  
  // Create an object representing a car
  const car: Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015
  };
  
  // Access the model property
  console.log(car.model); // Output: 'Corolla'
  