/*                              QUESTION 149
Explain the concept of the event loop in JavaScript with an example.
*/
function takeOrder(customerName, callback) {
    console.log("Waiter: Hello", customerName, "what would you like to order?");
    // Simulate taking order time (asynchronous operation)
    setTimeout(function () {
        var order = Math.random() > 0.5 ? "burger" : "pizza";
        console.log("  Waiter: Placing order for", order);
        callback(order);
    }, 1000);
}
function cookAndServe(order) {
    console.log("Kitchen: Preparing", order);
    // Simulate cooking time (another asynchronous operation)
    setTimeout(function () {
        console.log("Kitchen: Order ready -", order);
    }, 2000);
}
// Customers (events) arriving at the restaurant (event queue)
var customer1 = "Ali";
var customer2 = "Babar";
takeOrder(customer1, function (order) {
    console.log("Customer:", customer1, "received their", order);
    cookAndServe(order);
});
takeOrder(customer2, function (order) {
    console.log("Customer:", customer2, "received their", order);
    cookAndServe(order);
});
console.log("Waiter: Taking orders for other customers..."); // Script continues
