class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following: `);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome

  isAlive() {
    if (this.hitPoints > 0) {
      return true;
    } else {
      return false;
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    opponent.hitPoints -= this.strength;
    console.log(
      "${opponent.name} has been attacked and was dealt ${this.strength}"
    );

    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
var Gandalf = new Character("Gandalf", 1000, 5000);
Gandalf.printStats();
// Create an interval that alternates attacks every 2000 milliseconds
