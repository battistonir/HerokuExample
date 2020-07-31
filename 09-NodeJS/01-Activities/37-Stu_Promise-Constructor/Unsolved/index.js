function waitFor(seconds) {
  return new Promise(function (resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      // use reject as a callback
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function () {
      resolve("Success!");
    }, seconds * 1000);
  });
}

waitFor(15, function (err, msg) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(msg);
});
waitFor(-5)
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log(err); // error is printed since 'seconds' is less than 1
  });
