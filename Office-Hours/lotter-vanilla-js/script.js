// DEPENDENCIES ==========================
// DOM Elements
var lotteryPickForm = document.getElementById("lottery-pick");
var userLotteryNumberSelect = document.querySelector("#user-lottery-number");
var userPickSpan = document.getElementById("user-pick");
var luckyNumberSpan = document.getElementById("lucky-number");
var resultMessageEl = document.getElementById("result-message");

// Initial data
// array of possible numbers
var possibleNumbers = [0, 1, 2, 3, 4, 5];
// the number picks
var userPick;
var randomPick;

// FUNCTIONS =============================

// init function
function init() {
  // generate some options
  generateOptions();

  console.log("The lottery game loaded...");
}

function generateOptions() {
  // clear out the select
  userLotteryNumberSelect.textContent = "";
  // fill the select element with options from our possible numbers
  // go through the possible numbers
  possibleNumbers.forEach(function (number) {
    // create an option
    var option = document.createElement("option");
    // add the a value to it
    option.setAttribute("value", number);
    option.innerHTML = number;
    // put it in the page / display it
    userLotteryNumberSelect.appendChild(option);
  });
}

function getRandomNumber() {
  // return a random number from the array
  return possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];
}

function userWins() {
  displayResults("You win!!");
}

function userLoses() {
  displayResults("You lose!!");
}

function displayResults(message) {
  // display user pick
  userPickSpan.textContent = userPick;
  // display lucky number
  luckyNumberSpan.textContent = randomPick;
  // display the message
  resultMessageEl.textContent = message;
}

// USER INPUT ============================
// a user submits the form
lotteryPickForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("user submitted the form");

  // get the number the user picked
  userPick = parseInt(userLotteryNumberSelect.value);
  console.log("user pick: ", userPick);
  // go into the array of possible numbers
  // pick a random number from the possible numbers
  randomPick = getRandomNumber();
  console.log("random pick: ", randomPick);
  // do the 2 numbers match? (randome and user pick)
  if (userPick === randomPick) {
    // yes?
    // user wins?
    userWins();
  } else {
    // no?
    // user loses?
    userLoses();
  }
});

init();
