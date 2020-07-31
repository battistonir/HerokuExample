function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

const dog = new Animal(true, "Woof!");
console.log(dog);
dog.makeNoise();
const cat = new Animal(false, "Meow!");
console.log(cat);
cat.makeNoise();

const massHysteria = function (obj1, obj2) {
  if (obj1.raining === true && obj2.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dog, cat);
