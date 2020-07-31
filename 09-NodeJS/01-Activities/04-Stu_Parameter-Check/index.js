console.log("Hello World!");

var valOne = process.argv[2];
console.log(valOne);

var valTwo = process.argv[1];
console.log(valTwo);

if (valOne === valTwo) {
  console.log("They match!");
} else {
  console.log("They don't match");
}
