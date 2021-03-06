// DEPENCIES ===============
// DOM Elements
var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");

// Grocery Array
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// User Input ==================
listEl.addEventListener("click", function () {
  event.preventDefault();
  if (event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
