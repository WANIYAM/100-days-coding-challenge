/*                         QUESTION 111
Use an if-else-if chain to categorize a person's age 
group (child, teenager, adult).
*/

// Function to categorize a person's age group
function categorizeAgeGroup(age: number): string {
    // Define the age ranges for each category
    const CHILD_AGE = 12;
    const TEENAGER_AGE = 18;

    // Check if the age is low enough for the child category
    if (age <= CHILD_AGE) {
        return "child";
    }
    // Check if the age is high enough for the teenager category
    else if (age <= TEENAGER_AGE) {
        return "teenager";
    }
    // If the age is above the maximum for a teenager, assign the adult category
    else {
        return "adult";
    }
}

console.log(categorizeAgeGroup(15)); 
