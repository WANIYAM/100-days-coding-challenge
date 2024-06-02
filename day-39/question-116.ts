/*                                    QUESTION 116
 Create a switch case that matches several cases to the same
  code block, representing seasons.
*/

// Function to log the season based on a number (1-4)
function logSeason(season: number): void {
    // Use a switch statement to log the season
    switch (season) {
        // Match several cases to the same code block
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        // If the number is not between 1 and 12, log an error message
        default:
            console.log("Invalid season.");
    }
}

logSeason(1);  
logSeason(4);  
logSeason(7);  
logSeason(10); 
logSeason(13); 