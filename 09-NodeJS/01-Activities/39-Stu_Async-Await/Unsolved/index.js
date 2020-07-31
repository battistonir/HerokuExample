const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
let animalArr = [];

async function combineAnimals() {
  try {
    const cat = await readFileAsync("cat.json", "utf8");
    animalArr.push(JSON.parse(cat));
    console.log(animalArr);

    const dog = await readFileAsync("dog.json", "utf8");
    animalArr.push(JSON.parse(dog));
    console.log(animalArr);

    const goldfish = await readFileAsync("goldfish.json", "utf8");
    animalArr.push(JSON.parse(goldfish));
    console.log(animalArr);

    const hamster = await readFileAsync("hamster.json", "utf8");
    animalArr.push(JSON.parse(hamster));
    console.log(animalArr);

    writeFileAsync("combined.json", JSON.stringify(animalArr, null, 2));
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
