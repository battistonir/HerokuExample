const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  // Create two new arrays to contain the cats and dogs objects
  const dogs = animalJSON.filter(({ species }) => species === "dog");
  const cats = animalJSON.filter(({ species }) => species === "cat");

  // Alternatively deconstructing the objects
  // for (const animal of animalJSON) {
  //   const { species } = animal;
  //   console.log(species);
  //   if (species === "cat") {
  //     console.log("It's a cat");
  //     cats.push(animal);
  //     console.log(animal);
  //   } else {
  //     console.log("It's a dog");
  //     dogs.push(animal);
  //     console.log(animal);
  //   }
  // }
  console.log("Dogs Array:\n", dogs, "\nCats Array:\n", cats);
  fs.writeFile("dogs.json", JSON.stringify(dogs, null, 2), function () {
    console.log("Updated dogs.json file!");
  });
  fs.writeFile("cats.json", JSON.stringify(cats), function () {
    console.log("Updated cats.json file!");
  });
});
