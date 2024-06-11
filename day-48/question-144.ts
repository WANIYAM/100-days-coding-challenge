/*                                          QUESTION 144
Explain the use of the Promise.all() method with an example.
*/
/*
Imagine you have two friends who are making you food (asynchronous tasks). You want to wait until
 both friends are done cooking (all promises resolve) before you can eat (handle the result).

Here's how Promise.all() helps:

You give instructions (create promises) to both friends about what to cook.
You wait for both friends to finish (wait for all promises to resolve using Promise.all()).
Once they're done, they bring you the food (the resolved values from both promises).
You can now enjoy your meal (handle the resolved data in the .then() method).
*/

function makeFood(friend, dish) {
    return new Promise((resolve, reject) => {
      // Simulate cooking time
      setTimeout(() => {
        if (Math.random() < 0.2) { // Simulate a 20% chance of burning the food (rejection)
          reject(new Error(`${friend} burned the ${dish}!`));
        } else {
          resolve(`${friend} made a delicious ${dish}!`);
        }
      }, 2000);
    });
  }
  
  const friend1Promise = makeFood("Ali", "pizza");
  const friend2Promise = makeFood("Babar", "burger");
  
  Promise.all([friend1Promise, friend2Promise])
  .then(food => {
    const [aliFood, babarFood] = food; // Destructure the resolved data array
    console.log(aliFood);
    console.log(babarFood);
    console.log("Dinner is ready! ");
  })
  .catch(error => {
    console.error("Uh oh! There was a problem:", error.message);
  });
  