/*                                QUESTION 98
Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/

function daysUntilNewYear(): void {
    const today: Date = new Date();
    const nextYear: number = today.getFullYear() + 1;
    const newYear: Date = new Date(nextYear, 0, 1);
    const oneDay: number = 24 * 60 * 60 * 1000; // milliseconds in one day
    const daysLeft: number = Math.round((newYear.getTime() - today.getTime()) / oneDay);
    console.log(`${daysLeft} days left until New Year!`);
}

daysUntilNewYear();
