/*                              QUESTION 149
Explain the concept of the event loop in JavaScript with an example.
*/

/*
Imagine you have a single waiter (call stack) in a restaurant (JavaScript engine) who can only take one order (function) at a time. 
But you also have a line of customers (event queue) who want to place orders (asynchronous tasks).

Here's how the event loop works like a restaurant manager:

1. **Customers Arrive (Events Added):** Customers come in (events are triggered) and wait in line (added to the event queue). 
These events could be things like a user clicking a button, a network request completing, or a timer expiring.
2. **Waiter Takes Orders (Call Stack):** The waiter (call stack) goes to the first customer in line (checks the event queue).
If there's a customer (event), the waiter takes their order (pushes the corresponding callback function onto the call stack).
3. **Cooking the Order (Function Execution):** The waiter takes the order to the kitchen (executes the callback function).
The kitchen prepares the food (the function does its job).
4. **Delivering the Food (Callback Execution):** Once the food is ready (the function finishes), the waiter delivers it
to the customer (the callback function's code is run).
5. **Back to the Line (Event Processing Complete):** The customer leaves happy (the callback function finishes execution 
and is removed from the call stack). The waiter goes back to the line (the event loop checks the queue again).
6. **Repeat (Continuous Processing):** The event loop keeps repeating this process, taking events from the queue, pushing
callbacks onto the call stack, and executing them one by one.

This way, even though the waiter can only take one order at a time, the restaurant can handle multiple customers 
efficiently because the event loop manages the queue and ensures orders are processed in the correct order.
*/

interface Order {
    customerName: string;
    order: string;
  }
  
  function takeOrder(customerName: string, callback: (order: string) => void): void {
    console.log("Waiter: Hello", customerName, "what would you like to order?");
  
    // Simulate taking order time (asynchronous operation)
    setTimeout(() => {
      const order = Math.random() > 0.5 ? "burger" : "pizza";
      console.log("  Waiter: Placing order for", order);
      callback(order);
    }, 1000);
  }
  
  function cookAndServe(order: string): void {
    console.log("Kitchen: Preparing", order);
  
    // Simulate cooking time (another asynchronous operation)
    setTimeout(() => {
      console.log("Kitchen: Order ready -", order);
    }, 2000);
  }
  
  // Customers (events) arriving at the restaurant (event queue)
  const customer1: string = "Ali";
  const customer2: string = "Babar";
  
  takeOrder(customer1, (order: string) => {
    console.log("Customer:", customer1, "received their", order);
    cookAndServe(order);
  });
  
  takeOrder(customer2, (order: string) => {
    console.log("Customer:", customer2, "received their", order);
    cookAndServe(order);
  });
  
  console.log("Waiter: Taking orders for other customers..."); // Script continues
  