// TypeScript file: object_type_annotations.ts
// Method 1: Inline Type Annotation
var personExOne;
// Assigning values to personExOne
personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
console.log("PersonExOne:", personExOne);
// Method 2: Separate Type Declaration
var personExTwo = {
    name: "Bob",
    age: 28,
    jobTitle: "Developer",
    address: {
        street: "456 Park Ave",
        city: "Metropolis",
    },
};
console.log("PersonExTwo:", personExTwo);
