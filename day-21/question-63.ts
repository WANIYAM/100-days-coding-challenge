/*                                QUESTION 63
Shape Shifter: Write a program that can describe
 either a circle or a rectangle using a special type 
 alias, including properties unique to each shape.
*/

interface Circle {
    type: 'circle';
    radius: number;
}

interface Rectangle {
    type: 'rectangle';
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

// Example usage
const circle: Circle = { type: 'circle', radius: 5 };
const rectangle: Rectangle = { type: 'rectangle', width: 4, height: 6 };

// Describe circle
console.log(`This is a circle with radius ${circle.radius}.`);
console.log(`Area: ${Math.PI * circle.radius ** 2}`);

// Describe rectangle
console.log(`This is a rectangle with width ${rectangle.width} and height ${rectangle.height}.`);
console.log(`Area: ${rectangle.width * rectangle.height}`);
