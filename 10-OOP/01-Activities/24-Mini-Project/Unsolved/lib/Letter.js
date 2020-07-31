//Contains a class, `Letter`. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// * A string value to store the underlying character for the letter

// * A boolean value that stores whether that letter has been guessed yet

// * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

class Letter {
  constructor(letter) {
    this.letter = letter;
    this.guessed = false;
    this.visible = this.visibleAtStart(this.letter);}
    
    visibleAtStart(letter){
      const specialCharacters = "!@#$%^&*?><".split("");
      if (!specialCharacters.includes(letter)){
        return true;
      }
      return false;
    }
  }

  userGuess() {
    () => {};
    inquirer
      .prompt([
        {
          type: "input",
          message: "What letter do you think is in the word?",
          name: "guess",
        },
      ])
      .then(function (reply) {
        if (reply.guess === letter) {
        } else {
          return "_";
        }
      });
  }
}

module.exports = Letter;

// * **Letter.js**: Contains a class, `Letter`. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// =========================================================================================================================

// const Letter = require("../lib/Letter");

// describe("Letter class", () => {
//   it("Characters that aren't digits or letters are instantly visible", () => {
//     expect(new Letter("?").visible).toBe(true);
//   });

//   it("toString returns _ for letters", () => {
//     expect(new Letter("a").toString()).toBe("_");
//   });

//   describe("guess", () => {
//     it("Correct guess returns true", () => {
//       expect(new Letter("j").guess("j")).toBe(true);
//     });

//     it("Incorrect guess returns false", () => {
//       expect(new Letter("j").guess("l")).toBe(false);
//     });
//   });

//   describe("getSolution", () => {
//     it("returns character", () => {
//       expect(new Letter("l").getSolution()).toBe("l");
//     });
//   });
// });
