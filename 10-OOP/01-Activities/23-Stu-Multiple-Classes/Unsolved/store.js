const toy = require("./toy");
class Store {
  // this should create an object with name, stock and revenue
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  // This method should increase the store's revenue by the price of the toy
  processProductSale(productName) {
    // check the stock for the toy

    const [toy] = this.stock.filter((obj) => {
      obj.name === productName;
    });
    if (this.stock.length === 0 || !toy) {
      console.log(`${productName.name} is out of stock`);
    } else {
      // Decrease toy count
      toy.count--;
      // increase revenue
      this.revenue += toy.price;
    }
  }

  replenishStock(name, count) {
    const [toy] = this.stock.filter((obj) => {
      obj.name === name;
    });
    if (toy) {
      toy.count += count;
    }
  }
  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
