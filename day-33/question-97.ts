/*                                   QUESTION 97
Write a function that returns the current date in the format "DD-MM-YYYY".
*/

function getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDate());
