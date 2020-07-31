class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}

class Car extends Vehicle {
  constructor(color, passengers) {
    const id = "car";
    const numberOfWheels = 4;
    const sound = "beep";

    super(id, numberOfWheels, sound);
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

class Boat extends Vehicle {
  constructor(crew) {
    this.id = "boat";
    this.numberOfWheels = 0;
    this.sound = "*Generic Boat Sound*";

    super(id, numberOfWheels, sound);
    this.crew = crew;
  }

  crewSoundOff() {
    crew.forEach((member) => {
      console.log(member);
    });
  }
  useHorn() {
    console.log(this.sound);
  }
}
module.exports = Vehicle;
