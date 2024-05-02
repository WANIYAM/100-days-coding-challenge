/*                         QUESTION 27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for
 the appropriate color alien.
*/

// Version 1: Alien is green.

let Alien_Color: string = 'green';

if (Alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (Alien_Color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (Alien_Color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


// Version 2: Alien is yellow.

let Alien_color: string = 'yellow';

if (Alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (Alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (Alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


// Version 3: Alien is red.

let alien_Color: string = 'red';

if (alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_Color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_Color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


