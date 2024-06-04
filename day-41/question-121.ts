/*                  QUESTION 121
 Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
*/

// Function to log numbers from 1 to 10 but skips number 5 using the continue statement
function Numbers(): void {
    // Use a for loop to log numbers from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Check if the number is 5
        if (i === 5) {
            // If the number is 5, skip to the next iteration
            continue;
        }
        // Log the number
        console.log(i);
    }
}
Numbers();
