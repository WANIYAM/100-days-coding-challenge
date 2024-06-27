// Create an object adhering to the Person interface
var john = {
    name: "John",
    age: 30,
};
// Create an object implementing the Greetable interface
var sarah = {
    greet: function (message) {
        console.log("Sarah says: ".concat(message));
    },
};
sarah.greet("Hello, TypeScript!");
// Create an object adhering to the merged Settings interface
var userSettings = {
    theme: "dark",
    font: "Roboto",
};
// Usage
var myCar = {
    brand: "Toyota",
    model: "Camry",
};
var myTruck = {
    brand: "Ford",
    model: "F-150",
};
console.log(john);
sarah.greet("Hello, TypeScript!");
console.log(userSettings);
console.log(myCar);
console.log(myTruck);
