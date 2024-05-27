/*                                QUESTION 98
Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/
function daysUntilNewYear() {
    var today = new Date();
    var nextYear = today.getFullYear() + 1;
    var newYear = new Date(nextYear, 0, 1);
    var oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    var daysLeft = Math.round((newYear.getTime() - today.getTime()) / oneDay);
    console.log("".concat(daysLeft, " days left until New Year!"));
}
daysUntilNewYear();
