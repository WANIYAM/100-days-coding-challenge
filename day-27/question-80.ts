/*                               QUESTION 80
Updating Object Properties: Add a property named color to the
existing car object, and then update the year property to 2021.
 Show how to perform these operations.
*/

// Define an extended interface for the Car object
interface Car {
    make: string;
    model: string;
    year: number;
    color?: string; // Make color an optional property
  }
  
  // Create an object representing a car
  const CAR: Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015
  };
  
  // Add the color property
  CAR.color = 'red';
  
  // Update the year property
  CAR.year = 2021;
  
  // Verify the updates
  console.log(CAR.color); 
  console.log(CAR.year);  
  