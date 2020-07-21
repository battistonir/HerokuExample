// Dependencies
// DOM Elements
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

// Starting data
var count = localStorage.getItem("count");

// put the current count into the DOM
counter.textContent = count;

addButton.addEventListener("click", function () {
  // Increment the count
  count++;
  // update the count in the DOM
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function () {
  count--;
  counter.textContent = count;

  localStorage.setItem("count", count);
});
