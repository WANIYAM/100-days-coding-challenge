/*                       QUESTION 115
Use a switch statement to log the days of the week based on a number (1-7).
*/

// Function to log the days of the week based on a number (1-7)
function logDayOfWeek(day: number): void {
    // Use a switch statement to log the day of the week
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        // If the number is not between 1 and 7, log an error message
        default:
            console.log("Invalid day of the week.");
    }
}
logDayOfWeek(1); 
logDayOfWeek(5); 
logDayOfWeek(8);
