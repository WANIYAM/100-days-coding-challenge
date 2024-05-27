/*                           QUESTION 99
 Generate a date object representing your next birthday 
 and log it to the console.
*/

function logNextBirthday(month: number, day: number): void {
    const today: Date = new Date();
    const currentYear: number = today.getFullYear();
    let birthday: Date = new Date(currentYear, month - 1, day);

    // If the birthday has already passed this year, set it
    //  for next year
    if (today > birthday) {
        birthday.setFullYear(currentYear + 1);
    }

    console.log(`Next birthday: ${birthday}`);
}


logNextBirthday(5, 29);
