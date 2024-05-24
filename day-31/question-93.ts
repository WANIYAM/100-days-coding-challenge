/*                    QUESTION 93
Find the index of "Banana" in an array of fruits and replace it with "Mango".
*/

function replaceFruit(Fruits: string[]): void {
    const bananaIndex = Fruits.indexOf("Banana");
    if (bananaIndex !== -1) {
        Fruits[bananaIndex] = "Mango";
    }
}

// Example usage:
const Fruits: string[] = ["Apple", "Banana", "Orange", "Grapes"];
replaceFruit(Fruits);
console.log(Fruits); 
