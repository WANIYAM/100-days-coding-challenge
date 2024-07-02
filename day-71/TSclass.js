var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class definition
var AbstractItem = /** @class */ (function () {
    function AbstractItem(id, name) {
        this.id = id;
        this.name = name;
    } // Changed to public
    AbstractItem.generateNextId = function () {
        return AbstractItem.nextId++;
    };
    AbstractItem.nextId = 1;
    return AbstractItem;
}());
// Concrete class implementing the interface and extending the abstract class
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(id, name, price) {
        var _this = _super.call(this, id, name) || this;
        _this._price = price;
        return _this;
    }
    Object.defineProperty(Product.prototype, "price", {
        // Accessor (getter) for price
        get: function () {
            return this._price;
        },
        // Accessor (setter) for price
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    // Method implementation
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this._price);
    };
    // Overridden method from abstract class
    Product.prototype.getItemInfo = function () {
        return this.getProductInfo();
    };
    return Product;
}(AbstractItem));
// Another concrete class extending the abstract class
var AnotherProduct = /** @class */ (function (_super) {
    __extends(AnotherProduct, _super);
    function AnotherProduct(id, name, additionalInfo) {
        var _this = _super.call(this, id, name) || this;
        _this.additionalInfo = additionalInfo;
        return _this;
    }
    // Overridden method from abstract class
    AnotherProduct.prototype.getItemInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Additional Info: ").concat(this.additionalInfo);
    };
    return AnotherProduct;
}(AbstractItem));
// Static member usage
var product1 = new Product(AbstractItem.generateNextId(), "Widget", 20.0);
var product2 = new AnotherProduct(AbstractItem.generateNextId(), "Gadget", "Extra features");
// Accessing class properties and calling methods
console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
console.log(product2.getItemInfo()); // Output: ID: 2, Name: Gadget, Additional Info: Extra features
// Using the accessor
product1.price = 25.0;
console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $25
product1.price = -5; // Output: Price cannot be negative.
// Polymorphism in action
var items = [product1, product2];
items.forEach(function (item) { return console.log(item.getItemInfo()); });
