const Vehicle = require("./vehicle.js");
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "beep-beep");
    this.color = color;
    this.passengers = passengers;
  }

  checkPassengers() {
    if (this.passengers > 4) {
      console.log("There are too many passengers!");
    } else {
      console.log(`There are ${this.passengers} passengers`);
    }
  }

  useHorn() {
    console.log(this.sound);
  }
}

const car = new Car("Tesla", "Silver", 6);

car.printInfo();
car.useHorn();
car.checkPassengers();
