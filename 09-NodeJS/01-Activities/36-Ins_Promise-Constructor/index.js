const fs = require("fs");

// Making a new Promise

function readFileAsync(path, encoding) {
  // create new promise using callback function
  return new Promise(function (resolve, reject) {
    // First readFile to check for errors (without running the function)
    // If there is an error then reject method is invoked passing error to Reject
    fs.readFile(path, encoding, function (err, data) {
      if (err) {
        return reject(err);
      }
      // Successful obtained the data, then Resolve method passes data back
      resolve(data);
    });
  });
}

readFileAsync("example.txt", "utf8")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
