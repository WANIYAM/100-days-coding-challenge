/*                                               QUESTION 46
Enhanced Laptop Object: Construct an object for a laptop 
including properties make, model, year, 
and a method describe() that logs a sentence about the laptop.
*/

let Laptop = {
    make: "",
    model: "",
    year: "",
    describe: function() {
        console.log(`This is a ${this.year} ${this.make} ${this.model} laptop.`);
    }
};

//  usage:
let myLaptop = Object.create(Laptop);
myLaptop.make = "Dell";
myLaptop.model = "XPS 15";
myLaptop.year = "2023";
myLaptop.describe(); 
