/*                                          QUESTION 143
Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
*/

/*
Imagine you order a pizza (create a Promise). The pizza place might call you to confirm your order (resolve the Promise) or tell you they're out of dough (reject the Promise).

Here's how you can handle both scenarios:

.then(): If they call to confirm (Promise resolves), you can say "Great, thanks!" (handle the resolved value).
.catch(): If they tell you they're out of dough (Promise rejects), you can order from another place (handle the rejection).
*/

const orderPizza = new Promise((resolve, reject) => {
    const outOfDough = Math.random() < 0.2; // Simulate 20% chance of being out of dough
    if (outOfDough) {
      reject(new Error("Sorry, we're out of dough!"));
    } else {
      resolve("Your pizza order is confirmed!");
    }
  });
  
  // Handle successful order confirmation (calling to confirm)
  orderPizza.then(message => {
    console.log("Great, thanks!", message);
  })
  // Handle the case where they're out of dough
  .catch(error => {
    console.error("Oh no!", error.message);
    console.log("Ordering from another place...");
  });
  