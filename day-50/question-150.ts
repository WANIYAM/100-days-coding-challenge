/*                                QUESTION 150
Describe how asynchronous callbacks differ from synchronous code execution.
*/

/*
Imagine you are at a restaurant (your code execution). There are two ways to order food 
(asynchronous operations):

**Synchronous Ordering (like waiting for each step):**

1. You (the main thread) call the waiter (initiate the asynchronous operation).
2. The waiter waits in line at the kitchen (the operation is blocked).
3. The kitchen prepares your food (the operation executes).
4. The waiter brings you your food (the result is returned).
5. You eat your food (you use the result).

This is slow because you have to wait for the waiter to come back each time before you
can do anything else.*/
console.log("\n Synchronous Ordering (like waiting for each step):\n");

function orderFoodSync(menuItem: string): string {
  console.log("You: Can I get", menuItem, "?");

  // Simulate waiting for waiter (blocking operation)
  const waitTime = Math.random() * 2000;
  console.log("Waiting for waiter...", waitTime, "ms");
  setTimeout(() => {}, waitTime);

  const waiter = takeOrderSync(menuItem);
  console.log("Waiter:", "Sure, your", menuItem, "is coming right up!");

  // Simulate waiting for food (blocking operation)
  const cookTime = Math.random() * 3000;
  console.log("Waiting for food...", cookTime, "ms");
  setTimeout(() => {}, cookTime);

  const food = cookFoodSync(menuItem);
  console.log("You:", "Thanks! Here's my", food);

  return food;
}

function takeOrderSync(menuItem: string): string {
  console.log("Waiter takes your order:", menuItem);
  return menuItem;
}

function cookFoodSync(menuItem: string): string {
  console.log("Kitchen starts cooking:", menuItem);
  return menuItem + " (cooked)";
}

const orderedFood = orderFoodSync("pizza");
console.log("You eat your", orderedFood);
/*
**Asynchronous Ordering (like multitasking):**

1. You call the waiter and tell them your order (initiate the asynchronous operation).
2. The waiter goes to the kitchen to place your order (the operation starts).
3. You don't wait for the waiter (your code continues execution).
4. You can browse your phone or chat with your friends (you can do other things).
5. When the food is ready, the waiter comes back and tells you
 (the callback function is executed with the result).
6. You eat your food (you use the result).

This is faster because you can do other things while waiting for your food to be prepared.

*/
console.log( "\n Asynchronous Ordering (like multitasking):\n");

type order = {
    menuItem: string;
    callback: (food: string) => void;
  };
  
  function orderFoodAsync(menuItem: string, callback: (food: string) => void): void {
    console.log("You: Can I get", menuItem, "?");
  
    const order: order = { menuItem, callback };
  
    takeOrderAsync(order);
  }
  
  function takeOrderAsync(order: order): void {
    console.log("Waiter takes your order:", order.menuItem);
  
    // Simulate waiting for cook (asynchronous operation)
    const cookTime = Math.random() * 3000;
    console.log("Waiter:", "Sure, your", order.menuItem, "is coming right up!");
    setTimeout(() => {
      cookFoodAsync(order.menuItem, order.callback);
    }, cookTime);
  }
  
  function cookFoodAsync(menuItem: string, callback: (food: string) => void): void {
    console.log("Kitchen starts cooking:", menuItem);
    setTimeout(() => {
      const food = menuItem + " (cooked)";
      console.log("Kitchen:", food, "is ready!");
      callback(food);
    }, Math.random() * 3000);
  }
  
  orderFoodAsync("burger", (food) => {
    console.log("You:", "Thanks! Here's my", food);
  });
  
  console.log("You can browse your phone or chat with friends while waiting...");
