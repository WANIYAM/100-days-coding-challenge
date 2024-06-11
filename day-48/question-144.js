/*                                          QUESTION 144
Explain the use of the Promise.all() method with an example.
*/
/*
Imagine you have two friends who are making you food (asynchronous tasks). You want to wait until both friends are done cooking (all promises resolve) before you can eat (handle the result).

Here's how Promise.all() helps:

You give instructions (create promises) to both friends about what to cook.
You wait for both friends to finish (wait for all promises to resolve using Promise.all()).
Once they're done, they bring you the food (the resolved values from both promises).
You can now enjoy your meal (handle the resolved data in the .then() method).
*/
function makeFood(friend, dish) {
    return new Promise(function (resolve, reject) {
        // Simulate cooking time
        setTimeout(function () {
            if (Math.random() < 0.2) { // Simulate a 20% chance of burning the food (rejection)
                reject(new Error("".concat(friend, " burned the ").concat(dish, "!")));
            }
            else {
                resolve("".concat(friend, " made a delicious ").concat(dish, "!"));
            }
        }, 2000);
    });
}
var friend1Promise = makeFood("Ali", "pizza");
var friend2Promise = makeFood("Babar", "burger");
Promise.all([friend1Promise, friend2Promise])
    .then(function (food) {
    var aliFood = food[0], babarFood = food[1]; // Destructure the resolved data array
    console.log(aliFood);
    console.log(babarFood);
    console.log("Dinner is ready! ");
})
    .catch(function (error) {
    console.error("Uh oh! There was a problem:", error.message);
});
