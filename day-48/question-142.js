/*                       QUESTION 142
Create a Promise that resolves with "Hello, World!" after 2 seconds.
*/
/*
Imagine you have a friend who takes 2 seconds to write a greeting on a piece of paper (asynchronous operation).
Here's how to create a Promise to represent that:

You give your friend a piece of paper and a pen (create a Promise).
You tell your friend to write "Hello, World!" on the paper (specify the action within the Promise).
You wait for 2 seconds for your friend to finish (simulate the delay using setTimeout).
Once your friend is done, they give you the paper with the message ("Hello, World!") (resolve the Promise with the desired value).
*/
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
// You can greet your friend later when they give you the message (handle the resolved value with .then())
promise.then(function (message) {
    console.log(message); // Output: "Hello, World!" after 2 seconds
});
