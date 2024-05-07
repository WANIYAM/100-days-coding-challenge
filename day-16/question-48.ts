/*                                          QUESTION 48
Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order, 
 then log the result.
 */

 // Prices of two different sets of laptops
let laptopPricesSet1 = [1200, 1500, 900];
let laptopPricesSet2 = [1100, 1400, 950];

// Combining arrays with the spread operator
let combinedPrices = [...laptopPricesSet1,...laptopPricesSet2];

// Sorting the combined array in ascending order
combinedPrices.sort((a, b) => a - b);

// Logging the result
console.log("Combined and sorted prices:", combinedPrices);
