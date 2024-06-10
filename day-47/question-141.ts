/*                   QUESTION 141
Discuss the significance of the await reserved word in asynchronous JavaScript.
*/

/* Imagine you're waiting at a restaurant. You order your food (make an asynchronous request),
 but you can't do anything else (like reading a book) until your food arrives (the promise resolves).

Before `await`, it was like having to keep asking the waiter (the callback function) every second if your food is ready.
This could get annoying and confusing, especially if you ordered multiple dishes (multiple asynchronous operations).

With `await`, it's like telling the waiter to bring you your food whenever it's done, and then you can relax and 
read your book (continue with other code) until your food arrives (the promise resolves). 
You only focus on your food (the resolved value) when it's in front of you.

`Await` makes asynchronous code feel more like normal code, which is easier to understand and write.
*/

// NOW IN JAVASCRIPT

// Without await

// Imagine the waiter (callback function) keeps asking you if you're ready to order
function OrderFood(menuItem: string, callback: { (err: any, food: any): void; (err: any, drink: any): void; (arg0: string | null, arg1: string | null): void; }) {
    console.log("Ordering", menuItem);
    // Simulate some wait time (like the kitchen preparing the food)
    setTimeout(() => {
      if (menuItem === "Pizza") {
        const food = "Hot and delicious pizza!";
        callback(null, food); // No error, food arrived!
      } else {
        const error = "We are out of " + menuItem;
        callback(error, null); // Error! No food for you! 
      }
    }, 2000); // Wait for 2 seconds (simulating preparation time)
  }
  
  // You (the code) keep asking the waiter if the food is ready (calling the callback function)
  OrderFood("Pizza", (err: any, food: any) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Enjoying my", food);
    }
  });
  
  // You also want to order drinks (another asynchronous operation)
  OrderFood("Soda", (err: any, drink: any) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Sipping on my", drink);
    }
  });

// WITH AWAIT

// Imagine you tell the waiter what you want and then relax (pause execution)
async function orderFood(menuItem: string) {
    console.log("Ordering", menuItem);
    // Simulate some wait time (like the kitchen preparing the food)
    const waitTime = 2000; // Wait for 2 seconds (simulating preparation time)
    await new Promise(resolve => setTimeout(resolve, waitTime));
  
    if (menuItem === "Pizza") {
      return "Hot and delicious pizza!";
    } else {
      throw new Error("We are out of " + menuItem); // Throw an error if out of stock
    }
  }
  
  // You can order your food and drinks sequentially (like normal code) and relax until it arrives
  (async () => {
    try {
      const pizza = await orderFood("Pizza");
      console.log("Enjoying my", pizza);
  
      const drink = await orderFood("Soda");
      console.log("Sipping on my", drink);
    } catch (err) {
      console.error("Error:", err);
    }
  })();
  
  