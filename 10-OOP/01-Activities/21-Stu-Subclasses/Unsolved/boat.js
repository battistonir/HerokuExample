const Vehicle = require("./vehicle.js");

class Boat extends Vehicle {
  constructor(id, crew) {
    super(id, 0, "*Generic Boat Sound*");
    this.crew = crew;
  }

  crewSoundOff() {
    this.crew.forEach((member) => {
      console.log(`\n ${member} \n`);
    });
  }
  useHorn() {
    console.log(this.sound);
  }
}
const boat = new Boat("boat", ["Tom", "dick", "Harry", "Gerry"]);

boat.printInfo();
boat.crewSoundOff();
boat.useHorn();
