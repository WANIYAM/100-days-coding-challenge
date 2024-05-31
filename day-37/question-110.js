/*                         QUESTION 110
Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
*/
// Function to assign a grade based on a student's score
function assignGrade(score) {
    // Define the minimum scores required for each grade
    var A_SCORE = 90;
    var B_SCORE = 80;
    var C_SCORE = 70;
    var D_SCORE = 60;
    // Check if the score is high enough for an A
    if (score >= A_SCORE) {
        return "A";
    }
    // Check if the score is high enough for a B
    else if (score >= B_SCORE) {
        return "B";
    }
    // Check if the score is high enough for a C
    else if (score >= C_SCORE) {
        return "C";
    }
    // Check if the score is high enough for a D
    else if (score >= D_SCORE) {
        return "D";
    }
    // If the score is below the minimum for a D, assign an F
    else {
        return "F";
    }
}
var studentScore = 85;
console.log(assignGrade(studentScore));
