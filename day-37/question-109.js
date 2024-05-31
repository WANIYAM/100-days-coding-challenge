/*                                QUESTION 109
Write an if statement that logs "Good Morning" if the current time is before 12 PM.
*/
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
