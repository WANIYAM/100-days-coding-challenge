/*                           QUESTION 126
 Explain how the this keyword changes its value when used inside a nested function within a method.
*/
var persoN = {
    name: "waniya",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
        var nestedFunction = function () {
            console.log("Goodbye, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
        };
        nestedFunction();
    }
};
persoN.greet();
/*
In greet method: this is person, so this.name is "waniya".
In nestedFunction: this is not the person object anymore. It's the global object or undefined in strict mode.
*/ 
