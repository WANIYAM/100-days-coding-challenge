/*                              QUESTION 104
Create a function that generates a random hexadecimal color code.
*/

function getRandomHexColor(): string {
    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return `#${hex}`;
  }
  
  console.log(getRandomHexColor()); 
  