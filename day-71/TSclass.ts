// Interface definition
interface ProductInterface {
    id: number;
    name: string;
    getProductInfo(): string;
  }
  
  // Abstract class definition
  abstract class AbstractItem {
    private static nextId: number = 1;
  
    constructor(public id: number, public name: string) {} // Changed to public
  
    static generateNextId(): number {
      return AbstractItem.nextId++;
    }
  
    abstract getItemInfo(): string;
  }
  
  // Concrete class implementing the interface and extending the abstract class
  class Product extends AbstractItem implements ProductInterface {
    // Property type annotations
    private _price: number;
  
    constructor(id: number, name: string, price: number) {
      super(id, name);
      this._price = price;
    }
  
    // Accessor (getter) for price
    get price(): number {
      return this._price;
    }
  
    // Accessor (setter) for price
    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    // Method implementation
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
  
    // Overridden method from abstract class
    getItemInfo(): string {
      return this.getProductInfo();
    }
  }
  
  // Another concrete class extending the abstract class
  class AnotherProduct extends AbstractItem {
    private additionalInfo: string;
  
    constructor(id: number, name: string, additionalInfo: string) {
      super(id, name);
      this.additionalInfo = additionalInfo;
    }
  
    // Overridden method from abstract class
    getItemInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: ${this.additionalInfo}`;
    }
  }
  
  // Static member usage
  const product1 = new Product(AbstractItem.generateNextId(), "Widget", 20.0);
  const product2 = new AnotherProduct(AbstractItem.generateNextId(), "Gadget", "Extra features");
  
  // Accessing class properties and calling methods
  console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
  console.log(product2.getItemInfo());    // Output: ID: 2, Name: Gadget, Additional Info: Extra features
  
  // Using the accessor
  product1.price = 25.0;
  console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $25
  product1.price = -5;                    // Output: Price cannot be negative.
  
  // Polymorphism in action
  const items: AbstractItem[] = [product1, product2];
  items.forEach(item => console.log(item.getItemInfo()));
  