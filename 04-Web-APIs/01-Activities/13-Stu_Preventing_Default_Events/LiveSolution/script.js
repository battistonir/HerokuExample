// Starting Data ======================
// DOM Elements
var totalPriceInput = document.querySelector("#total-price");
var tipPercentageInput = document.getElementById("tip-percentage");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");
var submitEl = document.getElementById("submit");

// Initial Data
var newTotal = 0;
var tipAmount = 0;
var totalPrice = 0;
var tipPercent = 0.18;

// Helper Functions ====================

function textToPercent(text) {
  return parseFloat(text) / 100;
}

// Get User Input =====================
// a user clicks submit
submitEl.addEventListener("click", function (event) {
  // keep form from reloading the page
  event.preventDefault();
  // get the total price as a number
  totalPrice = parseFloat(totalPriceInput.value);
  console.log("Total Price: ", totalPrice);
  // get the tip percentage as a percentag
  tipPercent = textToPercent(tipPercentageInput.value);
  console.log("Tip Percent: ", tipPercent);
  // calculate a tip
  tipAmount = totalPrice * tipPercent;
  tipAmount = parseFloat(tipAmount.toFixed(2));
  console.log("Tip Amount: ", tipAmount);
  // calculate a new total
  newTotal = totalPrice + tipAmount;
  console.log("New Total: ", newTotal);
  // update the display with the tip amount
  tipAmountEl.textContent = tipAmount;
  // update the display with the new total
  newTotalEl.innerHTML = newTotal;

  // clear the form inputs
  totalPriceInput.value = "";
  tipPercentageInput.value = "";
});
