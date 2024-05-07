/*                                               QUESTION 46
Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
and a method describe() that logs a sentence about the laptop.
*/
var Laptop = {
    make: "",
    model: "",
    year: "",
    describe: function () {
        console.log("This is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " laptop."));
    }
};
// Example usage:
var myLaptop = Object.create(Laptop);
myLaptop.make = "Dell";
myLaptop.model = "XPS 15";
myLaptop.year = "2023";
myLaptop.describe(); // Outputs: This is a 2023 Dell XPS 15 laptop.
