/*                    QUESTION 114
Iterate over a Map of student IDs and names, and log each pair to the console.
*/
// Create a Map of student IDs and names
const students = new Map();
students.set(1, "John Doe");
students.set(2, "Jane Smith");
students.set(3, "Bob Johnson");

// Iterate over the Map using a for...of loop
for (const [id, name] of students) {
    // Log each pair to the console
    console.log(`ID: ${id}, Name: ${name}`);
}