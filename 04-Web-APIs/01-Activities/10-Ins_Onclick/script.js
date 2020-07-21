// connect with the interactive DOM elements
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

// the user clicks the theme switcher
themeSwitcher.addEventListener("click", function () {
  // are we in dark mode?
  if (mode === "dark") {
    // yes? change to light
    mode = "light";
    //container.setAttribute("class", "light");
    container.classList.add("light");
    container.classList.remove("dark");
  } else {
    // no? change to dark
    mode = "dark";
    // container.setAttribute("class", "dark");
    container.classList.remove("light");
    container.classList.add("dark");
  }
});
