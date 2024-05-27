/*                           QUESTION 99
 Generate a date object representing your next birthday
 and log it to the console.
*/
function logNextBirthday(month, day) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var birthday = new Date(currentYear, month - 1, day);
    // If the birthday has already passed this year, set it
    //  for next year
    if (today > birthday) {
        birthday.setFullYear(currentYear + 1);
    }
    console.log("Next birthday: ".concat(birthday));
}
logNextBirthday(5, 29);
