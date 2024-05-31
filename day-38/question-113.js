"use strict";
/*                           QUESTION 113
Write a function that checks if a Map contains a key for "Canada" and logs
 the capital if it exists.
*/
// Function to check if a Map contains a key for "Canada" and log the capital if it exists
function checkCanadaCapital(countryCapitals) {
    // Use the has() method to check if the Map contains a key for "Canada"
    if (countryCapitals.has("Canada")) {
        // Use the get() method to retrieve the value associated with the key "Canada"
        const capital = countryCapitals.get("Canada");
        // Log the capital
        console.log(capital);
    }
    // If the Map does not contain a key for "Canada", do nothing
    else {
        console.log("No capital found for Canada.");
    }
}
const countriesCapital = new Map();
// Add three countries to the Map
countriesCapital.set("France", "Paris");
countriesCapital.set("Japan", "Tokyo");
countriesCapital.set("Australia", "Canberra");
checkCanadaCapital(countriesCapital);
