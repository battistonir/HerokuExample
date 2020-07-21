// Target the div with the ID of articles.
console.dir(document.body.children[1]);
console.dir(document.getElementById("articles"));
console.dir(document.querySelector("#articles"));

var articlesDiv = document.getElementById("articles");

// Change its font size to 50px.
articlesDiv.style.fontSize = "50px";
// Change its first childs, last child to have a font color of blue.
articlesDiv.firstElementChild.lastElementChild.style.color = "blue";

// Change its previous sibling to have a background color of black.
articlesDiv.previousElementSibling.style.backgroundColor = "black";

// Target the div with the ID of main.
var mainDiv = document.getElementById("main");

// Change its second child node so the text is underlined.
mainDiv.childNodes[1].style.textDecoration = "underline";

// Change its last child element to have a font size of 50px.
mainDiv.lastElementChild.style.fontSize = "50px";

// Change its first child element to have a font color of orange.
mainDiv.children[0].style.color = "orange";

// Change its last child elements parent to have a font size of 40px.
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";
