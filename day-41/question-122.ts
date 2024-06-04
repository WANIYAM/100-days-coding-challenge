/*                        QUESTION 122
Use a while loop to count down from 10 to 1 and breaks the 
loop when it reaches 5.
*/

// Function to count down from 10 to 1 and breaks the loop when it reaches 5
function countDown(): void {
    // Initialize a counter variable
    let count = 10;

    // Use a while loop to count down from 10 to 1
    while (count >= 1) {
        // Log the current count
        console.log(count);

        // Check if the count is 5
        if (count === 5) {
            // If the count is 5, break the loop
            break;
        }
        // Decrement the count
        count--;
    }
}
countDown();